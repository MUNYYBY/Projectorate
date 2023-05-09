import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { FaDragon } from "react-icons/fa";
import { useUserDataHandler } from "../../context/userDataContext";
import { useNotificationsHandler } from "../../context/notificationContext";
import Loading from "../../components/Loading/loading";
export default function AppDashboard({ children }) {
  const { data: session, status } = useSession();
  const [check, setCheck] = useState(false); // this state wil check if all the initial data fetching has been done or not!
  const { userData, fetchUserInfo } = useUserDataHandler();
  const { setNotifications } = useNotificationsHandler();

  const router = useRouter();
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
    console.log("This is app component 1");
    console.log(status == "authenticated");
    console.log(!userData);
    if (status == "authenticated" && !userData) {
      const id = session.user.id;
      getUserData(id);
      router.replace("/app/u");
    }
  }, [status]);
  return (
    <div className="App">
      <Loading />
      {/* {check ? children : ""} */}
    </div>
  );
}
