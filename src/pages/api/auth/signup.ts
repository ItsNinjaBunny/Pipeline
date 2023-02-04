import { randomBytes } from 'crypto';
import Cookies from 'cookies';
import { encode, decode } from 'next-auth/jwt';

export const generateToken = () => randomBytes(64).toString('hex');

export const fromDate = (time: number, date = Date.now()) => {
  return new Date(date + time * 1000);
}

