import { OTSession, OTStreams } from 'opentok-react';
import { FC, useState } from 'react';
import ConnectionStatusComponent from '../ConnectionStatus';
import PublisherComponent from '../Publisher';
import SubscriberComponent from '../Subscriber';

interface IJoinProps {
  apiKey : string,
  sessionId: string,
  token : string,
}
const JoinMeetingComponent: FC <IJoinProps> = ({ apiKey, sessionId, token }:IJoinProps) => {
  const [error, setError] = useState<any>(null);

  const [, setConnected] = useState <boolean>(false);

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
        token={token}
        eventHandlers={sessionEvents}
        onError={onError}
      >
        {error ? <div>{error}</div> : null}
        <ConnectionStatusComponent />
        <PublisherComponent />
        <OTStreams>
          <SubscriberComponent />
        </OTStreams>
      </OTSession>
    </div>

  )
}

export default JoinMeetingComponent;
