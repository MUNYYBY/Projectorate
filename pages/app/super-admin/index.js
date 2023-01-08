import SideBar from "../../../components/SideBar/SideBar";
import SubPanel from "../../../components/Sub-panel/SubPanel";
export default function SuperAdminDashboard({ children }) {
  return (
    <div className="Dashboard">
      <SideBar />
      <SubPanel />
      {children}
    </div>
  );
}
