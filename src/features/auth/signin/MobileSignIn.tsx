import React, { useState } from 'react';
import { Input } from '../components';
import { isBlank } from '../functions';
import { useRouter } from 'next/router';
import { login, decodeJwt } from '../functions';
import { GoogleLogin } from '@react-oauth/google';
import { loginWithGoogle } from '../functions/login.with.google';

type Props = {
  isSignIn: boolean;
  setIsSignIn: CallableFunction;
}

export const MobileSignIn = ({ isSignIn, setIsSignIn }: Props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const handleLogin = async () => {
    if(!isBlank(username, password)) {
      setError('Please fill out all fields');
      return;
    }

    const response = await login({ email: username, password });


    console.log(response);

    if(response.error && response.status !== 200) {
      setError(response.error);
      return;
    }

    if(response.status === 200) {
      localStorage.setItem('accessToken', response.accessToken);
      localStorage.setItem('refreshToken', response.refreshToken);
      return router.push('/');
    }
  }

  return (
    <div className='flex flex-col relative items-center justify-center
      space-y-4 rounded mx-8 sm:mx-24 px-8 py-4 w-full bg-slate-200/80
      shadow-slate-500 shadow-xl'>
      <h1 className='text-4xl py-2'>Pipeline</h1 >
      <Input type='text'
        onChange={setUsername} value={username}
        label='Username'
        className='outline-none bg-transparent
          px-1 border-b-2 border-slate-900'
      />
      <Input type='password'
        onChange={setPassword} value={password}
        label='Password'
        className='outline-none bg-transparent
          px-1 border-b-2 border-slate-900'
      />
      <button onClick={handleLogin}
        className='w-full py-2 bg-slate-900 font-medium
        tracking-wide text-white/90 rounded'>
        Sign In
      </button>

      <div className='flex flex-col space-y-2 justify-center items-center'>
        <p onClick={() => setIsSignIn((prev: boolean) => !prev)}
          className='flex items-center gap-2 cursor-pointer'>
          Don't have an account?
          <span className='text-blue-700/90 font-medium py-0.5'>
            Sign Up!
          </span>
        </p>
        <p className='relative text-sm text-gray-600 cursor-pointer'>Forgot Password?</p>
      </div>
      <div className='flex justify-center'>
        <GoogleLogin
          onSuccess={response => {
            loginWithGoogle(response.credential);
          }}
          onError={() => console.log('login failed')}

        />

      </div>
    </div>
  );
}