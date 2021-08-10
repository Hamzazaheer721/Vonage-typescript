/* eslint-disable no-console */
import { client } from '../../../config/apollo';
import LOGIN from './queries';
import { LoginInput } from './user.models';

const loginService = async (login : LoginInput) => {
  try {
    const { data } = await client.query({
      query: LOGIN,
      variables: {
        email: login.email,
        password: login?.password,
      },
    })
    return data?.login;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('LOGIN', error)
    return error;
  }
}

export default loginService;
