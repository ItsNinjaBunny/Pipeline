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
import { LockClosedIcon } from "@heroicons/react/24/outline";
import { FacebookIcon, GoogleIcon, UserCircleIcon } from "src/components";
import Image from "next/image";
import logo from "public/logo.png";

const DesktopSignIn = ({
  providers,
  csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [email, setEmail] = useState<string>("");
  const [signUp, setSignup] = useState<string>("show-sign-in");
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

  console.log("session", session);

  const handleButton = (provider: ClientSafeProvider) => {
    if (provider.name === "Credentials") return;

    return (
      <button key={provider.id} onClick={() => void signIn(provider.id)}>
        {provider.name === "Google" ? (
          <GoogleIcon className="h-8 w-8" />
        ) : provider.name === "Facebook" ? (
          <FacebookIcon className="h-[34px] w-[34px]" />
        ) : undefined}
      </button>
    );
  };

  return (
    <div className="body color2 absolute">
      <div className=" color3 absolute  top-0 h-full w-full"></div>
      <div className=" start-left color2 absolute left-1/2 top-[-37.33%] h-full w-full skew-x-[30deg]"></div>
      <div className=" start-left2 color2 absolute left-[150%] h-full w-1/4"></div>
      <div className="start-left color2 absolute left-1/2 top-[37.5%] h-full w-full skew-x-[-30deg]"></div>
      <div className="content-box color2 z-10">
        <div
          className={`${
            signUp == "show-sign-in" ? "show-sign-in" : "opacity-0"
          } content-pane `}
        >
          <h1
            className={`mi-auto mt-[5vh] text-lg font-medium leading-10 tracking-wider`}
          >
            WELCOME TO
          </h1>

          <Image
            priority={true}
            className=" h-[10vh] w-[30vh]"
            alt=""
            src={logo}
          />
          <form
            onSubmit={async (e) => {
              e.preventDefault();
            }}
            className=" flex  w-[100%] flex-col content-center"
          >
            {/* <input name='csrfToken' type='hidden' defaultValue={csrfToken} /> */}
            <div className="input-box mi-auto t">
              <UserCircleIcon className="float-left h-8 w-8" />

              <input
                className="input float-left"
                type="text"
                placeholder="Username"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="input-box mi-auto">
              <LockClosedIcon className="float-left h-8 w-8" />
              <input
                className="input float-left"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <button
              type="submit"
              className="login-button mi-auto rounded-full text-xl "
            >
              Login
            </button>
          </form>

          <p className="mt-[3%] font-medium tracking-wide">
            Don't have an account?
            <span
              onClick={() => {
                setSignup("show-sign-up");
              }}
              className="cursor-pointer font-semibold tracking-wider text-blue-700"
            >
              {" "}
              Sign Up!
            </span>
          </p>

          <div className="mt-[1%] flex w-full flex-row items-center justify-center">
            <div className="h-[0.5%] w-[18%] bg-slate-900"></div>
            <span className="m-[1%] text-lg">OR</span>
            <div className="h-[0.5%] w-[18%] bg-slate-900"></div>
          </div>

          <p className="mt-[2%] text-gray-600">Continue with social media</p>
          <div className="mt-[3%] flex w-full flex-row items-center justify-center space-x-8">
            {providers ? (
              Object.values(providers).map((provider) => {
                return handleButton(provider);
              })
            ) : (
              <></>
            )}
          </div>
        </div>
        <div
          className={`${
            signUp == "show-sign-up" ? "top-0 h-full" : " h-[0]"
          } content-pane absolute `}
        >
          <h1
            className={`mi-auto mt-[5vh] text-lg font-medium leading-10 tracking-wider`}
          >
            WELCOME TO
          </h1>

          <Image
            priority={true}
            className=" h-[10vh] w-[30vh]"
            alt=""
            src={logo}
          />
          <form
            onSubmit={async (e) => {
              e.preventDefault();
            }}
            className=" flex  w-[100%] flex-col content-center"
          >
            {/* <input name='csrfToken' type='hidden' defaultValue={csrfToken} /> */}
            <div className="input-box mi-auto t">
              <UserCircleIcon className="float-left h-8 w-8" />

              <input
                className="input float-left"
                type="text"
                placeholder="Username"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="input-box mi-auto">
              <LockClosedIcon className="float-left h-8 w-8" />
              <input
                className="input float-left"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <button
              type="submit"
              className="login-button mi-auto rounded-full text-xl "
            >
              Sign Up
            </button>
          </form>

          <p className="mt-[3%] font-medium tracking-wide">
            Have an account?
            <span
              onClick={() => {
                setSignup("show-sign-in");
              }}
              className="cursor-pointer font-semibold tracking-wider text-blue-700"
            >
              {" "}
              Sign In!
            </span>
          </p>
        </div>
        <div className="content-pane right-pane  color3 float-right">
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
    props: { providers, csrfToken },
  };
};

export default DesktopSignIn;
