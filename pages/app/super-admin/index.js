import SideBar from "../../../components/SideBar/SideBar";
import SubPanel from "../../../components/Sub-panel/SubPanel";
import SearchModule from "../../../components/Search/SearchModule";
import { RouteContextProvider } from "../../../context/routesContext";
import DashboardHeader from "../../../components/DashboardHeader/DashboardHeader";
import TabDevider from "../../../components/Devider/Devider";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
export default function SuperAdminDashboard({ children }) {
  return (
    <RouteContextProvider>
      <div className="Dashboard">
        <SideBar />
        <SubPanel />
        {!children ? (
          <div className="ml-[calc(5rem+18rem)]">
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
              <h1 className="font-demo text-xl">Hi there...Welcome</h1>
            </div>
          </div>
        ) : (
          ""
        )}
        {children}
      </div>
    </RouteContextProvider>
  );
}
