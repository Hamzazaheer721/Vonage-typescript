/* eslint-disable no-console */
import { FC } from 'react';

import JoinMeetingComponent from '../../components/JoinMeeting';

const apiKey = String(process.env.REACT_APP_VONAGE_API_KEY) || ''
const ViewComponent: FC<{}> = () => {
  const sessionId = '2_MX40NzAwMDY5NH5-MTYyODU5MzY3Njg4Nn5rSGtjUmlPQzBSVVgvRWJHZlEwZjVUTkR-fg';
  return (
    <JoinMeetingComponent apiKey={apiKey} sessionId={sessionId} />
  )
}

export default ViewComponent;
