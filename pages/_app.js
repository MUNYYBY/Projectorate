import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps, session }) {
  return (
    <>
      <NextNProgress
        color="#00DC1F"
        startPosition={0.3}
        height={4}
        options={{ easing: "ease", speed: 500 }}
      />
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
