import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { MobileSignIn } from 'src/features';

const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true); // [true, () => {}
  const router = useRouter();

  useEffect(() => {
    // if(session) router.push('/');
  }, []);

  return (
    <div className='min-h-screen'>
      <MobileSignIn isSignIn={isSignIn} setIsSignIn={setIsSignIn} />

    </div>
  );
}

export default SignIn;