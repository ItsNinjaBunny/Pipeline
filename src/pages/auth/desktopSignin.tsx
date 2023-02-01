import {
  signIn,
  getCsrfToken,
  getProviders,
  type ClientSafeProvider,
} from "next-auth/react";
import { type InferGetServerSidePropsType } from "next";
import { type CtxOrReq } from "next-auth/client/_utils";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { Input } from "postcss";
import Typewriter from "src/features/auth/components/TypeWriter";
const DesktopSignIn = ({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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

  // useEffect(() => {
  //   if (session) router.push("/");
  // });

  const handleButton = (provider: ClientSafeProvider) => {
    return (
      <button
        className={`relative -bottom-12 min-w-[200px] max-w-[300px] rounded
    bg-slate-300 px-4 py-2 duration-300 hover:bg-slate-300/70`}
        key={provider.id}
        onClick={() => signIn(provider.id)}
      >
        Sign into {provider.name}
        {providers ? (
          Object.values(providers).map((provider) => {
            return handleButton(provider);
          })
        ) : (
          <></>
        )}
      </button>
    );
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

          <img
            className=" h-[13vh] w-[32%] py-4"
            src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/880/8098560880_57a7f77a-9a32-41af-bb28-978376dbeaf8.png?cb=1675138693"
          />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("saved");
            }}
            className=" flex  w-[100%] flex-col py-10"
          >
            <div className="input-box mi-auto t">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="float-left h-8 w-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <input
                className="input float-left"
                type="text"
                placeholder="Username"
              ></input>
            </div>
            <div className="input-box mi-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="float-left h-7 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>

              <input
                className="input float-left"
                type="password"
                placeholder="Password"
              ></input>
            </div>

            <button type="submit" className="login-button mi-auto">
              Login
            </button>
          </form>
        </div>
        <div className="content-pane bg-slate-900">
          <Typewriter strings={strings}></Typewriter>
        </div>
      </div>
    </div>
  );
};
export const getServerSideProps = async (context: CtxOrReq | undefined) => {
  const providers = await getProviders();
  const csrfToken = await getCsrfToken(context);
  return {
    props: { providers, csrfToken },
  };
};

export default DesktopSignIn;
