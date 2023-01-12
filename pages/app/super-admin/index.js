import { useState, useEffect } from "react";
import SideBar from "../../../components/SideBar/SideBar";
import SubPanel from "../../../components/Sub-panel/SubPanel";
import SearchModule from "../../../components/Search/SearchModule";
import { RouteContextProvider } from "../../../context/routesContext";
import DashboardHeader from "../../../components/DashboardHeader/DashboardHeader";
import TabDevider from "../../../components/Devider/Devider";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { getSession, useSession } from "next-auth/react";
import AppDashboard from "..";
export default function SuperAdminDashboard({ children }) {
  const { data: session } = useSession;
  const [userInfo, setUserInfo] = useState(null);
  const getInfo = async () => {
    setUserInfo(await getSession());
  };
  useEffect(() => {
    getInfo();
  }, []);
  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);
  return (
    <AppDashboard>
      <RouteContextProvider>
        <div
          className="Dashboard w-screen h-screen absolute z-10"
          style={{ backgroundColor: "#2c2e33" }}
        >
          <SideBar />
          <SubPanel />
          {!children ? (
            <div className="ml-[calc(4.5rem+16rem)]">
              <DashboardHeader />
              <div className="p-4">
                <SearchModule
                  title="SEARCH"
                  description="Take a dive in to the data and its attributes. Find anything you are looking for!"
                />
              </div>
              <TabDevider
                color="bg-gray-900"
                width="w-full"
                opacity="opacity-1"
              />
              <div className="flex flex-col justify-center items-center mt-10">
                <Player
                  autoplay
                  loop
                  src="https://assets4.lottiefiles.com/packages/lf20_4ll9qg6q.json"
                  style={{ height: "300px", width: "300px" }}
                ></Player>
                <h1 className="font-demo text-xl text-center">
                  Hi there...Welcome my sweet bunny <br />{" "}
                  <span className="font-open">
                    {" "}
                    {userInfo ? userInfo?.user.name : ""}{" "}
                  </span>
                </h1>
              </div>
            </div>
          ) : (
            ""
          )}
          {children}
        </div>
      </RouteContextProvider>
    </AppDashboard>
  );
}
