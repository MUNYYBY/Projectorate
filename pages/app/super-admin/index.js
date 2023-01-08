import SideBar from "../../../components/SideBar/SideBar";
import SubPanel from "../../../components/Sub-panel/SubPanel";
import { useState, useEffect } from "react";
import AddEmployee from "../../../components/AddEmployee/AddEmployee";
export default function SuperAdminDashboard({ children }) {
  const [addEmployees, setAddEmployees] = useState(false);
  return (
    <div className="Dashboard">
      <SideBar />
      <SubPanel />
      <AddEmployee />
      {children}
    </div>
  );
}
