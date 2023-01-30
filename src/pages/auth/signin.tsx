import { signIn, getCsrfToken, getProviders, type ClientSafeProvider } from 'next-auth/react';
import { type InferGetServerSidePropsType } from 'next';
import { type CtxOrReq } from 'next-auth/client/_utils';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

const SignIn = ({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if(session) router.push('/');
  })

  const handleButton = (provider: ClientSafeProvider) => {
    return <button className={`relative -bottom-12 min-w-[200px] max-w-[300px] bg-slate-300
    px-4 py-2 rounded hover:bg-slate-300/70 duration-300`}
      key={provider.id} onClick={() => signIn(provider.id)}>
      Sign into {provider.name}
    </button>
  }

  return (
    <section className={`min-h-screen flex justify-center items-center bg-slate-300/90`}>
      <div className={`relative flex flex-col items-center justify-center space-y-4 
        px-20 py-28 rounded-md bg-slate-800/90`}>
        <p className={`absolute top-12 text-3xl tracking-wider font-bold text-slate-100`}>
          Sign In
        </p>
        {
          providers ? Object.values(providers).map(provider => {
            return handleButton(provider)
          }) : <></>
        }
      </div>
    </section>
  );
}

export const getServerSideProps = async (context: CtxOrReq | undefined) => {
  const providers = await getProviders()
  const csrfToken = await getCsrfToken(context)
  return {
    props: { providers, csrfToken },
  }
}

export default SignIn;