import '@/styles/globals.css'
import { Lora } from "@next/font/google";

export const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
