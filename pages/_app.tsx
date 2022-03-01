import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import GlobalContext from "../src/GlobalContext";
import Header from "../src/Components/Layout/Header/Header";

function MyApp({ Component, pageProps }: AppProps) {
  const [mobileState, setMobileActive] = React.useState<boolean>(false);
  return (
    <GlobalContext.Provider value={{ mobileState, setMobileActive }}>
      <Header />
      <Component {...pageProps} />
    </GlobalContext.Provider>
  );
}

export default MyApp;
