import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Typewriter from "src/features/auth/components/TypeWriter";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "src/components";
import Image from "next/image";
import logo from "public/logo.png";

const DesktopSignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [signUp, setSignup] = useState<string>("show-sign-in");
  const [password, setPassword] = useState<string>("");
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

  return (
    <div className="body color2 absolute">
      <div className=" color3 absolute  top-0 h-full w-full"></div>
      <div className=" start-left color2 absolute left-1/2 top-[-37.33%] h-full w-full skew-x-[30deg]"></div>
      <div className=" start-left2 color2 absolute left-[150%] h-full w-1/4"></div>
      <div className="start-left color2 absolute left-1/2 top-[37.5%] h-full w-full skew-x-[-30deg]"></div>
      <div className="content-box z-10">
        <div
          className={`${
            signUp == "show-sign-in" ? "top-[0%]" : "top-[-100%]"
          } content-pane show-sign-in`}
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
              className="login-button mi-auto rounded-md text-xl "
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
          <div className="mt-[3%] flex w-full flex-row items-center justify-center space-x-8"></div>
        </div>
        <div
          className={`${
            signUp == "show-sign-up" ? "top-0 h-full" : " top-[100%]"
          } content-pane absolute `}
        >
          <h1
            className={`mi-auto mt-[5vh] text-lg font-medium leading-10 tracking-wider`}
          >
            Personal Information
          </h1>

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
        <div className="content-pane color3 move-down relative z-[2] float-right overflow-hidden">
          <Typewriter strings={strings} />
        </div>
        <div
          className={`${
            signUp != "show-sign-up" ? "w-0" : "w-[50%]"
          } color4 absolute top-0 right-0 z-[3] flex h-full flex-col content-center self-center align-middle `}
        >
          <div className="relative top-[40%] flex flex-row content-center space-x-2 self-center align-middle">
            <div className="flex justify-center rounded-full bg-slate-900 py-1.5 px-4 text-2xl text-[#fff]">
              <span className="mb-[0.15rem]">1</span>
            </div>
            <div className="mt-[2.5vh] h-[.1vh] w-[6vw] bg-slate-900 opacity-50 "></div>
            <div className="flex justify-center rounded-full bg-slate-900 py-1.5 px-4 text-2xl text-[#fff] opacity-50">
              <span className="mb-[0.15rem]">2</span>
            </div>
            <div className="mt-[2.5vh] h-[.1vh] w-[6vw] bg-slate-900 opacity-50"></div>
            <div className="flex justify-center rounded-full bg-slate-900 py-1.5 px-4 text-2xl text-[#fff] opacity-50">
              <span className="mb-[0.15rem] ">3</span>
            </div>
            <div className="mt-[2.5vh] h-[.1vh] w-[6vw] bg-slate-900 opacity-50"></div>
            <div className="flex justify-center rounded-full bg-slate-900 py-1.5 px-4 text-2xl text-[#fff] opacity-50">
              <span className="mb-[0.15rem]">4</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopSignIn;
