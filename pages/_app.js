import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import { SessionProvider } from "next-auth/react";
import { NotificationsContextProvider } from "../context/notificationContext";
import { UserDataContextProvider } from "../context/userDataContext";
import { useState } from "react";
import { ConfigProvider, theme, Button, Card } from "antd";

function MyApp({ Component, pageProps, session }) {
  //for antd dark mode
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <>
      <ConfigProvider
        theme={{
          algorithm: darkAlgorithm,
          token: {
            colorPrimary: "#5865F2",
            colorBgBase: "#202225",
          },
        }}
      >
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
      </ConfigProvider>
    </>
  );
}

export default MyApp;
