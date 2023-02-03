import { request } from 'src/functions';
import { decodeJwt } from './decode.jwt';

type GooglePayload = {
  header: {
    alg: string;
    kid: string;
    typ: string;
  },
  payload: {
    aud: string;
    azp: string;
    email: string;
    email_verified: boolean;
    exp: number;
    family_name: string;
    given_name: string;
    iat: number;
    iss: string;
    jti: string;
    name: string;
    nbf: number;
    picture: string;
    sub: string;
  },
  signature: string;
}

type GoogleResponse = {
  error: string | null;
  status: number;
  accessToken: string;
  refreshToken: string;
}

export const loginWithGoogle = async (token: string | undefined) => {
  if(!token) return null;

  const data = decodeJwt<GooglePayload>(token);

  if(!data) return null;

  const { header, payload, signature } = data;
  const { email, email_verified, family_name, given_name, exp, picture, } = payload;

  const response = await request<GoogleResponse>(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/login/google`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      user: {
        email,
        verified: email_verified,
        lastName: family_name,
        firstName: given_name,
        exp,
        image: picture,
      }
    }
  });

  // make sure to save jwt's inside local storage
  console.log(response);

  return response;
}