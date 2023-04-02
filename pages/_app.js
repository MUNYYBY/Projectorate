import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import { SessionProvider } from "next-auth/react";
import { NotificationsContextProvider } from "../context/notificationContext";
import { UserDataContextProvider } from "../context/userDataContext";

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
        <UserDataContextProvider>
          <NotificationsContextProvider>
            <Component {...pageProps} />
          </NotificationsContextProvider>
        </UserDataContextProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
