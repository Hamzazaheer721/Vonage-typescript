/* eslint-disable no-console */
import {
  FC, memo, useCallback, useState,
} from 'react';
import { useHistory } from 'react-router-dom';
import { debounce } from 'lodash';
import { v4 as uuidv4 } from 'uuid'
import loginService from '../../services/graphql/user/services';
import Loader from '../Loader';
import { Form, Button, InputContainer } from './index.styled';

const roomId = uuidv4();
const LoginComponent : FC <{}> = memo(() => {
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const history = useHistory();
  const handleSubmit = useCallback(async (e: {preventDefault: ()=> void}) => {
    e.preventDefault();
    setLoading(true);
    const response = await loginService({ email: email?.toLowerCase().trim() })
    if (response instanceof Error) {
      if (response.message === 'Password is required for Admins') {
        setMessage('Wrong password')
      } else if (response.message === 'User doesn\' exist!') {
        setMessage("User doesn't exist")
      } else {
        setMessage('Some unexpected error occurred!');
      }
      setLoading(false);
    } else if (response && !response.isVerified) {
      setMessage('User is not verified')
    } else if (response && response.token) {
      setLoading(false)
      setMessage('Success')
      localStorage.setItem('token', response.token)
      localStorage.setItem('UserId', response.id)
      history.push(`/join-meeting/${roomId}`)
    }
  }, [])

  const handleEmailChange = debounce((e : any) => {
    setEmail(e.target.value)
  }, 600)

  return (
    <>
      {loading && <Loader />}
      <Form onSubmit={handleSubmit}>
        {message && (<div>{message}</div>) }
        <InputContainer type="text" placeholder="Please Enter email" onChange={handleEmailChange} />
        <Button>
          Login
        </Button>
      </Form>
    </>
  )
})

export default LoginComponent;
