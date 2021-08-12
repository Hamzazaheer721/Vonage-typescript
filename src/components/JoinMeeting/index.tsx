/* eslint-disable no-console */
import {
  useEffect,
  useCallback,
  FC, useState, useRef,
} from 'react';
import { OTSession } from 'opentok-react';
import ConnectionStatusComponent from '../ConnectionStatus';
import PublisherComponent from '../Publisher';
import SubscriberComponent from '../Subscriber';
import JoinMeetingContainer, { Text } from './index.styled';

const JoinMeetingComponent: FC <{}> = () => {
  const [error, setError] = useState<any>('');
  const [streams, setStreams] = useState<any>([])
  const [connected, setConnected] = useState <boolean>(false);
  const otSession = useRef<any>();
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    streams ? console.log('Stream :', streams) : null
  }, [streams])

  const onError = useCallback((err: any) => {
    setError(`Failed to connect : ${err.message}`);
  }, [])

  const sessionEventHandler = {
    connectionCreated: () => {
      console.info('CONNECTION CREATED');
      setConnected(true);
    },
    connectionDestroyed: () => {
      console.info('CONNECTION DESTROYED');
      setConnected(false);
    },
    sessionConnected: () => {
    },
    sessionDestroyed: () => {
    },
    streamCreated: ({ stream } : any) => {
      console.info('STREAM HAS BEEN CREATED')
      setStreams((_streams : any) => [..._streams, stream]);
    },
    streamDestroyed: ({ stream } : any) => {
      console.info('STREAM HAS BEEN DESTROYED');
      if (streams.length > 0) {
        setStreams((_streams: any) => {
          _streams?.filter((_stream: any) => (_stream.id === stream.id))
        })
      }
    },
    streamPropertyChanged: ({ stream }:any) => {
      console.info('STREAM HAS BEEN CHANGED');
      setStreams((_streams : any) => {
        if (_streams) {
          _streams?.map((_stream : any) => (stream.id === _stream.id ? stream : _stream))
        }
      })
    },
  }

  // const onSignalSend = (data:any) => {
  //   if (otSession.current !== null) {
  //     otSession.current.sessionHelper.session.signal({
  //       type: 'msg',
  //       data,
  //     }, (otError :any) => {
  //       if (otError) {
  //         console.log('onSignalSend otError', otError)
  //       } else {
  //         console.log('onSignalSend Success', data)
  //       }
  //     })
  //   }
  // }
  // const onSignalReceive = (signal :any) => {
  //   console.log('onSignalReceive => ', JSON.parse(signal.data));
  //   // based on signal data type you can do use switch or conditional statements
  // }
  return (
    <JoinMeetingContainer>
      <Text>Welcome to the room</Text>
      <OTSession
        // @ts-ignore
        ref={otSession}
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
          <PublisherComponent />
          {streams && streams.map((_stream : any) => (
            <SubscriberComponent stream={_stream} key={_stream.connection.id} />
          ))}
        </>
        )}
      </OTSession>
    </JoinMeetingContainer>
  )
}

export default JoinMeetingComponent;
