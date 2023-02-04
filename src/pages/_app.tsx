import { type AppType } from "next/app";

import "../styles/globals.css";
import React from 'react';

const MyApp: AppType = ({
  Component,
  pageProps: { ...pageProps },
}) => {
  return (
    <Component {...pageProps} />
  );
};

export default MyApp;
