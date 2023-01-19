import { useState, useEffect } from "react";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import LoginBox from "../components/Login/loginBox";
import BG_IMAGE from "../public/Assets/login_bg_image.svg";
import { motion } from "framer-motion";
import { useNotificationsHandler } from "../context/notificationContext";

export default function Auth() {
  const [isClicked, setIsClicked] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [signInResponse, setSignInResponse] = useState(null);
  const [notificationWindow, setNotificationWindow] = useState(<></>);
  const router = useRouter();

  const { notifications, setNotifications } = useNotificationsHandler();

  const { data: session, status } = useSession();

  useEffect(() => {
    if (router.pathname == "/auth" && status == "authenticated")
      router.replace("/app");
  }, []);

  const LoginApp = async () => {
    setLoading(true);
    setErrorMessage(null);
    const payload = { email, password };
    setSignInResponse(
      await signIn("credentials", { ...payload, redirect: false })
    );
  };
  const getSessionFromAuth = async () => {
    const session = await getSession();
    console.log(signInResponse);
    console.log({ session });
  };
  useEffect(() => {
    console.log(signInResponse);
    if (signInResponse) {
      if (!signInResponse.error) {
        //sucessfully logged in
        setNotifications({
          placement: "bottomRight",
          message: "Login sucessfully",
          description: "You have been logged in to the Projectorate!!!",
          type: "sucess",
        });
        router.replace("/app");
      } else {
        setErrorMessage(signInResponse.error);
        setNotifications({
          placement: "bottomRight",
          message: "Login Failed",
          description:
            "Please type in correct credentials before you try to login!",
          type: "error",
        });
        setLoading(false);
      }
      getSessionFromAuth();
    }
  }, [signInResponse]);
  useEffect(() => {
    if (isClicked) {
      LoginApp();
    }
  }, [isClicked]);
  return (
    <>
      <div className="h-screen bg-primary">
        <div className="secondry-section h-screen w-screen absolute z-0">
          <div className="absolute bottom-0 h-full w-full mx-[-15vw]">
            <Image
              src={BG_IMAGE}
              alt="Projectorate welcome image"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="primary-section w-full h-full z-1 absolute flex justify-end items-center lg:pr-40 md:pr-20 sm:10 ">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <LoginBox
              setIsClicked={setIsClicked}
              setEmail={setEmail}
              setPassword={setPassword}
              loading={loading}
              errorMessage={errorMessage}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
