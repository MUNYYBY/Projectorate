import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Users } from "../Config/User";
import Loading from "../components/Loading/loading";
import HorizontalLayout from "./components/HorizontalLayout";

export default function UserLayout({ children }) {
  //** States Initialization */
  const [layoutType, setLayoutType] = useState(-1);

  //** Router Initializtion  */
  const router = useRouter();

  const Layout = () => {
    return (
      <>
        <HorizontalLayout>{children}</HorizontalLayout>
      </>
    );
  };

  useEffect(() => {
    if (router.asPath) {
      const i = router.asPath.includes("app/u");
      setLayoutType(i);
    }
  }, [router.asPath]);
  return <>{layoutType ? <Layout /> : children} </>;
}
