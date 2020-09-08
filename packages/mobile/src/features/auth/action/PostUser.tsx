import {signUp} from '@project/common/features/auth/connectors'

const postUser = async (user: {email: any; password: any}) => {
  return signUp(user);
};

export default postUser;
