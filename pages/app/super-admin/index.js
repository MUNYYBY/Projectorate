import SideBar from "../../../components/SideBar/SideBar";
import SubPanel from "../../../components/Sub-panel/SubPanel";
import { RouteContextProvider } from "../../../context/routesContext";
export default function SuperAdminDashboard({ children }) {
  return (
    <RouteContextProvider>
      <div className="Dashboard">
        <SideBar />
        <SubPanel />
        {children}
      </div>
    </RouteContextProvider>
  );
}
