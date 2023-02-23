import GlobalStyle from "../styles";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SWRConfig value={{
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
      }}>
        <GlobalStyle />
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
