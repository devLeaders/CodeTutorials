export type user = {
  email: string;
  password: string;
};

export type returnKyeType =
  | 'none'
  | 'done'
  | 'search'
  | 'default'
  | 'go'
  | 'next'
  | 'send'
  | 'previous'
  | 'google'
  | 'join'
  | 'route'
  | 'yahoo'
  | 'emergency-call';
