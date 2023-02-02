import { useEffect } from 'react';
import { useRouter } from 'next/router';

const SignIn = () => {
  const router = useRouter();

  useEffect(() => {
    // if(session) router.push('/');
  }, []);

  return (
    <section className={`min-h-screen flex justify-center items-center bg-slate-300/90`}>
      <div className={`relative flex flex-col items-center justify-center space-y-4
        px-20 py-28 rounded-md bg-slate-800/90`}>
        <p className={`absolute top-12 text-3xl tracking-wider font-bold text-slate-100`}>
          Sign In
        </p>
      </div>
    </section>
  );
}

export default SignIn;