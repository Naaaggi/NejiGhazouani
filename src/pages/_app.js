import Head from "next/head";
import Navigation from "../components/Navigation";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
      <title>Neji Ghazouani - Full Stack Developer</title>
        <meta charset="UTF-8" />
        <meta name="description" content="Neji Ghazouani - Full Stack Developer" />
      </Head>
      <Navigation />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;