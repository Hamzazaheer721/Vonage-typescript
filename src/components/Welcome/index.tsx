import { FC } from 'react';
import { Container, JoinRoomButton, WelcomeText } from './index.styled';

const WelcomeComponent: FC<{}> = () => (
  <Container>
    <WelcomeText>
      Welcome to Vonage Test
    </WelcomeText>
    <JoinRoomButton type="button">
      Join Meeting
    </JoinRoomButton>
  </Container>
)

export default WelcomeComponent;
