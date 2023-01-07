import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        color="#00DC1F"
        startPosition={0.3}
        height={4}
        options={{ easing: "ease", speed: 500 }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
