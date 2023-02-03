import jwt from 'jsonwebtoken';

export const decodeJwt = <T>(token: string | undefined) => {
  if(!token) return null;

  const decoded = <T>jwt.decode(token, { complete: true });

  if(!decoded) return null;

  return decoded;
}