/* eslint-disable no-unused-vars */
import { FC, useState } from 'react';
import Form from './index.styled';

const LoginComponent : FC <{}> = () => {
  const [email, setEmail] = useState<string>('');
  const handleSubmit = async () => {

  }

  return (
    <Form>
      <input type="text" placeholder="Please Enter email" />
    </Form>
  )
}

export default LoginComponent;
