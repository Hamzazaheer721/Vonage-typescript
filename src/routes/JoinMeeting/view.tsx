/* eslint-disable no-console */
import { useEffect, FC, useState } from 'react';

import JoinMeetingComponent from '../../components/JoinMeeting';

const apiKey = String(process.env.REACT_APP_VONAGE_API_KEY) || ''
const ViewComponent: FC<{}> = () => {
  const sessionId = '1_MX40NzAwMDY5NH5-MTYyODQ5MjcwOTAzOH5Dc3l1c2twK3ZWYXZGU2ltZXFRaVlkUlF-fg';
  const [tokenToSend, setToken] = useState<string>('')
  useEffect(() => {
    const local = localStorage.getItem('token');
    if (local === null) {
      setToken('XYZ')
    } else {
      setToken(local)
    }
  }, [])

  return (
    <JoinMeetingComponent apiKey={apiKey} tokenToSend={String(tokenToSend)} sessionId={sessionId} />
  )
}

export default ViewComponent;
