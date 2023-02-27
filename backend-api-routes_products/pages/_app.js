import GlobalStyle from "../styles";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }) {
  const fetcher = (resource, init) => fetch(resource, init).then(res => res.json())
  return (
    <>
      <SWRConfig value={{
        fetcher
      }}>
        <GlobalStyle />
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
