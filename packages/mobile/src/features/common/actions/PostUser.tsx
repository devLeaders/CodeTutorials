import {signUp} from '@project/common/features/auth/connectors';

const postUser = async (user: {email: string; password: string}) => {
  return signUp(user);
};

export default postUser;
