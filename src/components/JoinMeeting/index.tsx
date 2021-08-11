/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { OTSession, OTStreams } from 'opentok-react';
import {
  useCallback,
  FC, useState,
} from 'react';

import ConnectionStatusComponent from '../ConnectionStatus';
import PublisherComponent from '../Publisher';
import SubscriberComponent from '../Subscriber';

const JoinMeetingComponent: FC <{}> = () => {
  const [error, setError] = useState<any>('');
  const [streams, setStreams] = useState<any>([])
  const [connected, setConnected] = useState <boolean>(false);

  const onError = useCallback((err: any) => {
    console.log(err.message)
    setError(`Failed to connect : ${err.message}`);
  }, [])

  const sessionEventHandler = {
    connectionCreated: () => {
      console.info('CONNECTION CREATED');
      setConnected(true);
    },
    connectionDestroyed: () => {
      console.log('CONNECTION DESTROYED');
      setConnected(false);
    },
    streamCreated: ({ stream } : any) => {
      console.log('STREAM HAS BEEN CREATED')
      setStreams((_streams : any) => [..._streams, stream]);
    },
    streamDestroyed: ({ stream } : any) => {
      console.log('STREAM HAS BEEN DESTROYED');
      setStreams((_streams: any) => {
        _streams?.filter((_stream: any) => (_stream.id === stream.id))
      })
    },
    streamPropertyChanged: ({ stream }:any) => {
      console.log('STREAM HAS BEEN CHANGED');
      setStreams((_streams : any) => {
        if (_streams) {
          _streams?.map((_stream : any) => (stream.id === _stream.id ? stream : _stream))
        }
      })
    },
  }
  return (
    <div>
      <h1>Welcome to the room</h1>
      <OTSession
        apiKey="47000694"
        sessionId="2_MX40NzAwMDY5NH5-MTYyODU5MzY3Njg4Nn5rSGtjUmlPQzBSVVgvRWJHZlEwZjVUTkR-fg"
        token="T1==cGFydG5lcl9pZD00NzAwMDY5NCZzaWc9ZDc2MmY4MjY2MWQ1MDg4Y2I5ZTBjZjA4OWYyODJhM2YxZmQzNDEzNTpzZXNzaW9uX2lkPTJfTVg0ME56QXdNRFk1Tkg1LU1UWXlPRFU1TXpZM05qZzRObjVyU0d0alVtbFBRekJTVlZndlJXSkhabEV3WmpWVVRrUi1mZyZjcmVhdGVfdGltZT0xNjI4NTkzOTA1Jm5vbmNlPTAuOTUzODUyNjg0ODAyNTI0NCZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNjMxMTg1OTAzJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9"
        eventHandlers={sessionEventHandler}
        onError={onError}
      >
        {error ? <div>{error}</div> : null}
        {connected && (
        <>
          <ConnectionStatusComponent connection={connected} />
          <PublisherComponent />
          <OTStreams>
            <SubscriberComponent />
          </OTStreams>
        </>
        )}
      </OTSession>
    </div>
  )
}

export default JoinMeetingComponent;
