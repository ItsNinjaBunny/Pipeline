import { useEffect, useState } from 'react';
import { request, Response } from 'src/utils';
import { useRouter } from 'next/router';

type Session = {
  id: string;
  name: string;
  email: string;
  image?: string;
}

type SessionError = null;

type RefreshResponse = {
  accessToken: string;
  refreshToken: string;
}

type RefreshError = {
  message: string;
  statusCode: number;
  status: 'error';
};

export const useSession = () => {
  const [session, setSession] = useState<Session | null>(null);
  const router = useRouter();

  useEffect(() => {
    const getSession = async() => {
      const at = localStorage.getItem('accessToken');
      const rt = localStorage.getItem('refreshToken');

      if (!at || !rt) {
        //change later if needed
        router.push('/auth');
        return;
      }

      const refreshResponse = await request<Response<RefreshResponse, RefreshError>>(`${process.env.NEXT_PUBLIC_API_URL}`, {
        method: 'post',
        headers: {
          "authorization": `Bearer ${rt}`,
          "Content-Type": "application/json"
        }
      });

      if(refreshResponse.status === 'error') {
        router.push('/auth');
        return;
      }

      const { accessToken, refreshToken } = refreshResponse.data;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      const sessionResponse = await request<Response<Session, SessionError>>(`${process.env.NEXT_PUBLIC_API_URL}/auth/session`, {
        method: 'get',
        headers: {
          "authorization": `Bearer ${accessToken}`,
          "Content-Type": "application/json"
        }
      });

      if(!sessionResponse) {
        router.push('/auth');
        return;
      }

      setSession(sessionResponse.data);
    }

    getSession();
  }, []);

  return { data: session };
}