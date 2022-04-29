//import "../styles/globals.css"

import { GlobalStyle } from "../src/components/GlobalStyle";
import Layout from "../src/components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
