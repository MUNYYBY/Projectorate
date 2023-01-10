import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { FaDragon } from "react-icons/fa";
export default function AppDashboard({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    // console.log(
    //   "This is the app-wise-global status checker for auth: ",
    //   status
    // );
    if (status == "authenticated") {
      router.replace("/app/super-admin");
    } else if (status == "unauthenticated") {
      router.replace("/auth");
    }
  }, [status]);

  return (
    <div className="App">
      <div className="loading h-screen w-screen absolute top-0">
        <div className="w-full h-full flex flex-row justify-center items-center">
          <div className="loading-app-icon">
            <div className="p-4 bg-primary text-gray-300 rounded-3xl shadow-2xl animate-pulse animate-bounce ">
              <FaDragon size={50} />
            </div>
          </div>
        </div>
      </div>

      {children}
    </div>
  );
}
