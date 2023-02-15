import { defaultSEO } from "config/seo";

import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import GlobalStyle from "styles/GlobalStyle";
import store from "stores/store";

let persistor = persistStore(store)

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <DefaultSeo {...defaultSEO} />
      <Component {...pageProps} />
      <GlobalStyle />
      </PersistGate>
    </Provider>
  );
};

export default App;
