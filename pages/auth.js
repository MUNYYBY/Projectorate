import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import LoginBox from "../components/Login/loginBox";
import BG_IMAGE from "../public/Assets/login_bg_image.svg";
import { motion } from "framer-motion";

export default function Auth() {
  const [isClicked, setIsClicked] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const router = useRouter();
  useEffect(() => {
    console.log("Email: " + email + "----" + "password: " + password);
  }, [email, password]);

  useEffect(() => {
    if (isClicked) {
      router.push("app/super-admin");
    }
  }, [isClicked]);
  return (
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
          />
        </motion.div>
      </div>
    </div>
  );
}
