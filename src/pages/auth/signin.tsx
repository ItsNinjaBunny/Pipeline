import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MobileSignIn, SignUp } from "src/features";

const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // if(session) router.push('/');
  }, []);

  return (
    <div className="flex w-full bg-slate-200">
      {isSignIn ? (
        <MobileSignIn isSignIn={isSignIn} setIsSignIn={setIsSignIn} />
      ) : (
        <SignUp isSignIn={isSignIn} setIsSignIn={() => setIsSignIn} />
      )}
    </div>
  );
};

export default SignIn;
