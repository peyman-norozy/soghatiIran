import { AppProps } from "next/app";
import "../styles/global.css";
import { Provider } from "react-redux";
import store from "@/store/store";
import Setup from "@/components/Setup/Setup";
import Main from "@/layouts/Main";
import Header from "@/layouts/Header";
import { useState } from "react";
import Modals from "@/layouts/Modals";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      {/* setup component is using for necessary background setups of all pages*/}
      <Setup />
      {/* this components hold cross over window components */}
      {/* that need too be opened or closed */}
      <Modals />
      <Header />
      <Main>
        <Component {...pageProps} />;
      </Main>
    </Provider>
  );
}
