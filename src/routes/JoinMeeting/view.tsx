import { FC } from 'react';
import JoinMeetingComponent from '../../components/JoinMeeting';

const apiKey = String(process.env.REACT_APP_VONAGE_API_KEY) || ''
const ViewComponent: FC<{}> = () => {
  const sessionId = '1_MX40NzAwMDY5NH5-MTYyODQ5MjcwOTAzOH5Dc3l1c2twK3ZWYXZGU2ltZXFRaVlkUlF-fg';
  const token: string = 'T1==cGFydG5lcl9pZD00NzAwMDY5NCZzaWc9M2RiNjMyOTE3YWMzYWY4NDNkNmM4NTY3MWY5NWY3YWNmZWFiYjgwYjpzZXNzaW9uX2lkPTFfTVg0ME56QXdNRFk1Tkg1LU1UWXlPRFE1TWpjd09UQXpPSDVEYzNsMWMydHdLM1pXWVhaR1UybHRaWEZSYVZsa1VsRi1mZyZjcmVhdGVfdGltZT0xNjI4NDkyNzI5Jm5vbmNlPTAuMTI5NDYxMzU2ODYzMDU3ODImcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTYyOTA5NzUyOSZjb25uZWN0aW9uX2RhdGE9aGFtemF6YWhlZXI3MjElNDBnbWFpbC5jb20maW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD1mb2N1cw=='
  return (
    <JoinMeetingComponent apiKey={apiKey} token={token} sessionId={sessionId} />
  )
}

export default ViewComponent;
