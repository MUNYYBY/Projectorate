import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
export default function AppDashboard({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    console.log(
      "This is the app-wise-global status checker for auth: ",
      status
    );
    if (status == "authenticated") {
      router.replace("/app/super-admin");
    } else if (status == "unauthenticated") {
      router.replace("/auth");
    }
  }, [status]);

  return <div className="App">{children}</div>;
}
