import { createParamDecorator } from '@nestjs/common';

export const AuthUser = createParamDecorator((data, req) => {
  return req.user;
});