import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid'
import JoinMeetingComponent from '../../components/JoinMeeting';

const apiKey = String(process.env.REACT_APP_VONAGE_API_KEY) || ''
const ViewComponent: FC<{}> = () => {
  const sessionId = String(uuidv4());
  const token = String(uuidv4());
  return (
    <JoinMeetingComponent apiKey={apiKey} token={token} sessionId={sessionId} />
  )
}

export default ViewComponent;
