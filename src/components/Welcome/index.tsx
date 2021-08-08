import { FC, useRef } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'
import { Container, JoinRoomButton, WelcomeText } from './index.styled';

const WelcomeComponent: FC<{}> = () => {
  const JoinMeetingRoomID = useRef<any>(uuidv4());

  return (
    <Container>
      <WelcomeText>
        Welcome to Vonage Test
      </WelcomeText>
      <Link to={`/join-meeting/${JoinMeetingRoomID.current}`}>
        <JoinRoomButton type="button">
          Join Meeting
        </JoinRoomButton>
      </Link>
    </Container>
  )
}

export default WelcomeComponent;
