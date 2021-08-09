import { client } from '../../../config/apollo';
import LOGIN from './mutations';
import { LoginInput } from './user.models';

const loginService = async (login : LoginInput) => {
  try {
    const { data } = await client.mutate({
      mutation: LOGIN,
      variables: {
        input: {
          ...login,
        },
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
