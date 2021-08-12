/* eslint-disable no-console */
import React, {
  useEffect,
  useCallback,
  FC, useState, useRef, memo,
} from 'react';
import { OTSession } from 'opentok-react';

import {
  Session, SessionEventHandlers, Stream, StreamCreatedEvent, StreamDestroyedEvent, StreamPropertyChangedEvent,
  // eslint-disable-next-line import/no-unresolved
} from 'opentok-react/types/opentok';

import ConnectionStatusComponent from '../ConnectionStatus';
import PublisherComponent from '../Publisher';
import SubscriberComponent from '../Subscriber';
import {
  JoinMeetingContainer, MainContainer, MessageWrapper, SendMessageContainer, StreamsContainer, Text, Button, InputContainer, ChatHeader, MainChatWindow,
} from './index.styled';

interface IStreams {
  [streamId: string]: Stream;
}

const JoinMeetingComponent: FC <{}> = memo(() => {
  const [error, setError] = useState<any>('');
  const [streams, setStreams] = useState<IStreams>({})
  const [connected, setConnected] = useState <boolean>(false);
  const otSessionRef = useRef<{
    sessionHelper: { session: Session; streams: Stream };
  }>();
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    streams ? console.info('Stream :', streams) : null
  }, [streams])

  const onError = useCallback((err: any) => {
    setError(`Failed to connect : ${err.message}`);
  }, [])

  const sessionEventHandler: SessionEventHandlers = {
    connectionCreated: () => {
      console.info('CONNECTION CREATED');
      setConnected(true);
    },
    connectionDestroyed: () => {
      console.info('CONNECTION DESTROYED');
      setConnected(false);
    },
    signal: (signal : any) => {
      if (streams) {
        console.log('SIGNAL', signal)
      }
    },
    streamCreated: ({ stream }: StreamCreatedEvent) => {
      console.info('STREAM HAS BEEN CREATED')
      setStreams((_streams) => ({ ...Object.assign(_streams, { [stream.streamId]: stream }) }));
    },
    streamDestroyed: ({ stream } : StreamDestroyedEvent) => {
      console.info('STREAM HAS BEEN DESTROYED');
      setStreams((_streams) => {
        const streamsShallowCopy = { ..._streams };
        delete streamsShallowCopy[stream.streamId]
        console.info('streams:', _streams);
        return { ...streamsShallowCopy }
      })
    },
    streamPropertyChanged: ({ stream }:StreamPropertyChangedEvent) => {
      console.info('STREAM HAS BEEN CHANGED');
      setStreams((pvStreams) => {
        const pvStreamsShallowCopy = { ...pvStreams };
        pvStreamsShallowCopy[stream.streamId] = stream;
        return { ...pvStreamsShallowCopy }
      })
    },
  }

  const handleChange = useCallback((e : React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }, [])

  const handleSend = useCallback(() => {
    if (!otSessionRef.current?.sessionHelper.session) {
      return false
    }
    const { session } = otSessionRef.current.sessionHelper
    session.signal({
      data: inputValue,
    })
    setInputValue('');
    return true;
  }, [])

  return (
    <MainContainer>
      <JoinMeetingContainer>
        <Text>Welcome to the room</Text>
        <OTSession
        // @ts-ignore
          ref={otSessionRef}
          apiKey="47000694"
          sessionId="2_MX40NzAwMDY5NH5-MTYyODU5MzY3Njg4Nn5rSGtjUmlPQzBSVVgvRWJHZlEwZjVUTkR-fg"
          token="T1==cGFydG5lcl9pZD00NzAwMDY5NCZzaWc9ZDc2MmY4MjY2MWQ1MDg4Y2I5ZTBjZjA4OWYyODJhM2YxZmQzNDEzNTpzZXNzaW9uX2lkPTJfTVg0ME56QXdNRFk1Tkg1LU1UWXlPRFU1TXpZM05qZzRObjVyU0d0alVtbFBRekJTVlZndlJXSkhabEV3WmpWVVRrUi1mZyZjcmVhdGVfdGltZT0xNjI4NTkzOTA1Jm5vbmNlPTAuOTUzODUyNjg0ODAyNTI0NCZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNjMxMTg1OTAzJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9"
          eventHandlers={sessionEventHandler}
          onError={onError}
        >
          {error && (
          <div>
            {' '}
            <Text>{error}</Text>
          </div>
          )}
          {connected && (
          <>
            <ConnectionStatusComponent connection={connected} />
            <StreamsContainer>
              <PublisherComponent />
              {streams && Object.keys(streams).map((streamId) => streams[streamId]).map((_stream : any) => (
                <SubscriberComponent stream={_stream} key={_stream.connection.id} />
              ))}
            </StreamsContainer>
          </>
          )}
        </OTSession>
      </JoinMeetingContainer>
      <SendMessageContainer>
        <ChatHeader>
          Chat
        </ChatHeader>
        <MainChatWindow>
          heyy
          hey
        </MainChatWindow>
        <MessageWrapper>
          <InputContainer type="text" placeholder="Enter a message" value={inputValue} onChange={handleChange} />
          <Button type="button" onClick={handleSend}> Send</Button>
        </MessageWrapper>
      </SendMessageContainer>
    </MainContainer>
  )
})

export default JoinMeetingComponent;
