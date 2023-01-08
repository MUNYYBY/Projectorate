import SideBar from "../../../components/SideBar/SideBar";
import SubPanel from "../../../components/Sub-panel/SubPanel";
import SearchModule from "../../../components/Search/SearchModule";
import { RouteContextProvider } from "../../../context/routesContext";
import DashboardHeader from "../../../components/DashboardHeader/DashboardHeader";
import TabDevider from "../../../components/Devider/Devider";
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
              <SearchModule />
            </div>
            <TabDevider
              color="bg-gray-900"
              width="w-full"
              opacity="opacity-1"
            />
          </div>
        ) : (
          ""
        )}
        {children}
      </div>
    </RouteContextProvider>
  );
}
