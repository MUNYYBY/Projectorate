import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Users } from "../Config/User";
import Loading from "../components/Loading/loading";
import SuperAdminDashboard from "../pages/app/super-admin";
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
      const i = Users.findIndex((route) =>
        router.asPath.includes("app/" + route.userType)
      );
      console.log("Index found:", i, "for ", router.asPath);
      if (i > -1) {
        setLayoutType(i);
      } else {
        setLayoutType(-1);
      }
    }
  }, [router.asPath]);
  return <>{layoutType > -1 ? <Layout /> : children} </>;
}
