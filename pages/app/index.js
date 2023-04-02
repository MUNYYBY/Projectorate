import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { FaDragon } from "react-icons/fa";
import { useUserDataHandler } from "../../context/userDataContext";
import { useNotificationsHandler } from "../../context/notificationContext";
export default function AppDashboard({ children }) {
  const { data: session, status } = useSession();
  const [check, setCheck] = useState(false); // this state wil check if all the initial data fetching has been done or not!
  const { userData, fetchUserInfo } = useUserDataHandler();
  const { setNotifications } = useNotificationsHandler();

  const router = useRouter();
  useEffect(() => {
    if (status == "unauthenticated") {
      router.replace("/auth");
    }
  }, [status]);
  async function getUserData(id) {
    const res = await fetchUserInfo(id);
  }
  useEffect(() => {
    if (userData) {
      console.log("App fetch: ", userData);
      if (userData.data) {
        setCheck(true);
      } else {
        setNotifications({
          placement: "bottomRight",
          message: "Info",
          description: "Something went wrong!",
          type: "error",
        });
      }
    }
  }, [userData]);
  useEffect(() => {
    console.log("This is app component");
    if (status == "authenticated" && !check && !userData) {
      const id = session.user.id;
      getUserData(id);
      router.replace("/app/super-admin");
    }
  }, []);
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

      {check ? children : ""}
    </div>
  );
}
