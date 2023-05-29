import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { withTranslateRoutes } from "next-translate-routes";
import 'rc-slider/assets/index.css';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default withTranslateRoutes(App);
