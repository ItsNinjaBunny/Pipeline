import { type AppType } from "next/app";

import "../styles/globals.css";
import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <GoogleOAuthProvider clientId="567585874111-4mbeosqdl6sht4m6vrpnpgcd5ti0r78c.apps.googleusercontent.com">
      <Component {...pageProps} />
    </GoogleOAuthProvider>
  );
};

export default MyApp;
