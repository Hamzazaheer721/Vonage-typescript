import { FC } from 'react';
import LoginComponent from '../Login';
import { Container, WelcomeText } from './index.styled';

const WelcomeComponent: FC<{}> = () => (
  <Container>
    <WelcomeText>
      Welcome to Vonage Test
    </WelcomeText>
    <LoginComponent />
  </Container>
)

export default WelcomeComponent;
