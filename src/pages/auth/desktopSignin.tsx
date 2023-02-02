import {
  signIn,
  getCsrfToken,
  getProviders,
  type ClientSafeProvider,
} from "next-auth/react";
import { type InferGetServerSidePropsType } from "next";
import { type CtxOrReq } from "next-auth/client/_utils";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { Input } from "postcss";
import Typewriter from "src/features/auth/components/TypeWriter";
import { LockClosedIcon } from '@heroicons/react/24/outline';
import { FacebookIcon, GoogleIcon, UserCircleIcon } from 'src/components';
import Image from 'next/image';
import logo from 'public/logo.png';

const DesktopSignIn = ({
  providers, credentials, csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { data: session } = useSession();
  const router = useRouter();
  const strings = [
    "Streamline your sales process with our powerful CRM tools.",
    "Maximize your customer engagement with personalized communication.",
    "Gain valuable insights into your customer behavior and preferences.",
    "Easily track and manage your leads, deals, and customer interactions.",
    "Improve your team's productivity and collaboration with our CRM system.",
    "Elevate your customer service with our advanced ticketing and support features.",
    "Empower your marketing efforts with targeted campaigns and automated workflows.",
    "Unlock the full potential of your customer data with our advanced analytics and reporting.",
    "Experience the freedom and flexibility of our fully customizable CRM platform.",
    "Discover the power of seamless integration with our CRM's wide range of integrations.",
  ];

  console.log('session', session);

  const handleButton = (provider: ClientSafeProvider) => {
    if(provider.name === 'Credentials') return;

    return (<button key={provider.id} onClick={() => void signIn(provider.id)}>
      {
        provider.name === "Google" ? (
          <GoogleIcon className="w-8 h-8" />
        )
          : provider.name === "Facebook" ? (
            <FacebookIcon className="w-[34px] h-[34px]" />
          ) : undefined
      }
    </button>
    )
  };

  return (
    <div className="body bg-slate-900">
      <div className="square"></div>
      <div className="square-flipped"></div>
      <div className="content-box">
        <div className="content-pane">
          <h1
            className={`mi-auto mt-[5vh] text-[1.1vw]  font-medium leading-10 tracking-wider`}
          >
            WELCOME TO
          </h1>

          <Image
            priority={true}
            className=" h-[13vh] w-[32%] py-4"
            width={300}
            height={106}
            alt=''
            src={logo}
          />
          <form
            onSubmit={async (e) => {
              e.preventDefault();

            }}
            className=" flex  w-[100%] flex-col py-10"
          >
            {/* <input name='csrfToken' type='hidden' defaultValue={csrfToken} /> */}
            <div className="input-box mi-auto t">
              <UserCircleIcon className='float-left w-8 h-8' />

              <input
                className="input float-left"
                type="text"
                placeholder="Username"
                onChange={e => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="input-box mi-auto">
              <LockClosedIcon className='float-left w-8 h-8' />
              <input
                className="input float-left"
                type="password"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
              ></input>
            </div>
            <button type='submit' className="duration-200 ease-linear rounded-full login-button mi-auto">
              Login
            </button>
          </form>
          <div className='flex flex-col justify-center items-center space-y-8'>
            <p className='font-medium tracking-wide'>Don't have an account?
              <span className='text-blue-700 tracking-wider font-semibold'> Sign Up!</span>
            </p>

            <div className='flex flex-row w-full justify-center items-center'>
              <span className=''>OR</span>
            </div>

            <div className='flex flex-col justify-center items-center space-y-4'>
              <p className='text-gray-600'>Continue with social media</p>
              <div className='flex flex-row w-full items-center justify-center space-x-8'>
                {
                  providers ? Object.values(providers).map(provider => {
                    return handleButton(provider)
                  }) : <></>
                }
              </div>
            </div>
          </div>

        </div>
        <div className="content-pane bg-slate-900">
          <Typewriter strings={strings} />
        </div>
      </div>
    </div>
  );
};
export const getServerSideProps = async (context: CtxOrReq | undefined) => {
  const providers = await getProviders();
  const csrfToken = await getCsrfToken(context);
  const credentials = providers?.credentials;
  return {
    props: { providers, credentials, csrfToken },
  };
};

export default DesktopSignIn;


