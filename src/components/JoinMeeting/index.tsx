import { OTPublisher, OTSession } from 'opentok-react';
import { FC, useState } from 'react';

interface IJoinProps {
  apiKey : string,
  sessionId: string,
  token : string,
}
const JoinMeetingComponent: FC <IJoinProps> = ({ apiKey, sessionId, token }:IJoinProps) => {
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
    <OTSession
      apiKey={apiKey}
      sessionId={sessionId}
      token={token}
      eventHandlers={sessionEvents}
      onError={onError}
    >
      {error ? <div>{error}</div> : null}

    </OTSession>
  )
}

export default JoinMeetingComponent;
