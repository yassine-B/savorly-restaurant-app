import React from 'react';
import { appWithTranslation } from 'next-i18next';
import '@src/Styles/GlobalStyles.css';
import { type AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
export default appWithTranslation(App);
