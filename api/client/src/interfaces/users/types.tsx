export interface Profile {
  email: string;
  username: string;
  password: string;
  avatar: string | null;
  role: string;
}

export interface DecodedToken {
  _id: string;
  role: string;
  username: string;
  avatar: string | null;
  email: string;
  exp: number;
  iat: number;
}

export interface LoginParams {
  username: string;
  password: string;
}

export interface ErrorWithResponse extends Error {
  response?: { data: { message: string } };
}
