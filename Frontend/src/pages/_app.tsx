import { defaultSEO } from "config/seo";
import AuthProvider from "modules/auth/AuthProvider";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import { store, StoreContext } from "stores/store";
import GlobalStyle from "styles/GlobalStyle";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <StoreContext.Provider value={store}>
      <DefaultSeo {...defaultSEO} />
      <Component {...pageProps} />
      <GlobalStyle />
    </StoreContext.Provider>
  );
};

export default App;
