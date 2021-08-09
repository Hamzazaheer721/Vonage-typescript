/* eslint-disable no-unused-vars */
import { FC, useState } from 'react';
import { Form, Button, InputContainer } from './index.styled';

const LoginComponent : FC <{}> = () => {
  const [email, setEmail] = useState<string>('');
  const handleSubmit = async (e: {preventDefault: ()=> void}) => {

  }
  return (
    <Form onSubmit={handleSubmit}>
      <InputContainer type="text" placeholder="Please Enter email" />
      <Button>
        Login
      </Button>
    </Form>
  )
}

export default LoginComponent;
