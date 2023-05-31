import React, { useEffect, useState, memo } from "react";
import { useRouter } from "next/router";
import { Users } from "../Config/User";
import Loading from "../components/Loading/loading";
import HorizontalLayout from "./components/HorizontalLayout";

function UserLayout({ children }) {
  //** States Initialization */
  const [layoutType, setLayoutType] = useState(null);

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
      if (i != layoutType) {
        setLayoutType(i);
      }
    }
  }, [router.asPath]);
  return <>{layoutType ? <Layout /> : children} </>;
}

export default UserLayout;
