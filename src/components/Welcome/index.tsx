import { FC } from 'react';
import { Container, WelcomeText } from './index.styled';

const WelcomeComponent: FC<{}> = () => (
  <Container>
    <WelcomeText>
      Welcome to Vonage Test
    </WelcomeText>
  </Container>
)

export default WelcomeComponent;
