/* eslint-disable no-console */
import { OTSession, OTStreams } from 'opentok-react';
import {
  FC, useState,
} from 'react';
import ConnectionStatusComponent from '../ConnectionStatus';
import PublisherComponent from '../Publisher';
import SubscriberComponent from '../Subscriber';

interface IJoinProps {
  apiKey : string,
  sessionId: string,
  tokenToSend : string,
}

const JoinMeetingComponent: FC <IJoinProps> = ({ apiKey, sessionId, tokenToSend }:IJoinProps) => {
  const [error, setError] = useState<any>(null);

  const [connected, setConnected] = useState <boolean>(false);

  const sessionEvents = {
    sessionConnected: () => {
      setConnected(true);
    },
    setDisconnected: () => {
      setConnected(false)
    },
  }
  const onError = (err: any) => {
    setError(`Failed to connect : ${err.message}`);
  }
  return (
    <div>
      <h1>Welcome to the room</h1>
      <OTSession
        apiKey={apiKey}
        sessionId={sessionId}
        token={tokenToSend}
        eventHandlers={sessionEvents}
        onError={onError}
      >
        {error ? <div>{error}</div> : null}
        <ConnectionStatusComponent connection={connected} />
        <PublisherComponent />
        <OTStreams>
          <SubscriberComponent />
        </OTStreams>
      </OTSession>
    </div>

  )
}

export default JoinMeetingComponent;
