/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { OTSession, OTStreams } from 'opentok-react';
import {
  FC, useEffect, useState,
} from 'react';
import ConnectionStatusComponent from '../ConnectionStatus';
import PublisherComponent from '../Publisher';
import SubscriberComponent from '../Subscriber';

const JoinMeetingComponent: FC <{}> = () => {
  const [error, setError] = useState<any>(null);
  const [tokenToSend, setToken] = useState<string>('')
  useEffect(() => {
    const local = localStorage.getItem('token');
    if (local === null) {
      setToken(String('XYZ'))
    } else {
      setToken(String(local))
    }
  }, [tokenToSend])
  const [connected, setConnected] = useState <boolean>(false);

  const onError = (err: any) => {
    setError(`Failed to connect : ${err.message}`);
  }

  const publisherEventHandlers = {
    accessDenied: () => {
      console.log('User denied acces to the media Source')
    },
    streamCreated: () => {
      console.log('Publisher Stream has been created')
    },
    streamDestroyed: ({ reason }: {reason:any}) => {
      if (reason === 'mediastopped') {
        // user clicked stop sharing
      } else {
        console.log(`Publisher stream has been destroyed because ${reason}`)
      }
    },
  }

  return (
    <div>
      <h1>Welcome to the room</h1>
      <OTSession
        apiKey="47302914"
        sessionId="2_MX40NzMwMjkxNH5-MTYyODU5NzcxNTg1MH45QTBtcVVrQ3Q3MGpjRVUrVnlHMllVRGF-fg"
        token="T1==cGFydG5lcl9pZD00NzMwMjkxNCZzaWc9MzU4ZDFiYTg0NjY4ODhlN2FkZGU3NTI3ZGNkYmM3MmU0MTI3OTUxMzpzZXNzaW9uX2lkPTJfTVg0ME56TXdNamt4Tkg1LU1UWXlPRFU1TnpjeE5UZzFNSDQ1UVRCdGNWVnJRM1EzTUdwalJWVXJWbmxITWxsVlJHRi1mZyZjcmVhdGVfdGltZT0xNjI4NTk3NzU2Jm5vbmNlPTAuNDg1MDkxMDMzODc4OTI0Mjcmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTYzMTE4OTc1NCZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ=="
        eventHandlers={publisherEventHandlers}
        onError={onError}
      >
        {error ? <div>{error}</div> : null}
        { connected && (
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
