import React from "react";
import GlobalStyle from "../styles/global";
import { Provider } from "react-redux";
import { store } from "../Redux/store";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
        <GlobalStyle />
      </Provider>
    </>
  );
};

export default MyApp;
