import SearchModule from "../../../components/Search/SearchModule";
import TabDevider from "../../../components/Devider/Devider";
import { BsPeople } from "react-icons/bs";
import { IoIosAdd, IoIosHelpCircle } from "react-icons/io";
import { CgInbox } from "react-icons/cg";
import { Tooltip } from "antd";
import SuperAdminDashboard from ".";
import EmployeesContainer from "../../../components/Employees/EmployeesContainer";
import AddEmployee from "../../../components/AddEmployee/AddEmployee";
import DashboardHeader from "../../../components/DashboardHeader/DashboardHeader";
import { useState, useEffect } from "react";
export default function SuperAdminEmployees() {
  const [addEmployees, setAddEmployees] = useState(false);
  const addEmployeesHandler = () => {
    // e.preventDefault();
    console.log("hello");
    setAddEmployees(true);
  };
  return (
    <SuperAdminDashboard>
      <div className="Employees-panel ml-[calc(5rem+18rem)]">
        <DashboardHeader
          title="Employees Panel"
          type="employees"
          icon={<BsPeople size={30} />}
          setAddEmployees={setAddEmployees}
        />
        <div className="Search-employees-section px-4 my-4">
          <SearchModule
            title="SEARCH EMPLOYEES"
            description="Take a dive in to the employees and its attributes. Find anything you are looking for in this employees"
          />
        </div>
        <TabDevider color="bg-gray-900" width="w-full" opacity="opacity-1" />
        <div className="All-employees-stack mt-4 px-4">
          <div className="">
            <h1 className="font-semibold text-2xl opacity-80">ALL EMPLOYEES</h1>
            <p className="text-sm opacity-60 mt-1">
              A complete list of all the employees in Projectorate.
            </p>
          </div>
          <div className="Projects py-4 flex flex-col">
            <EmployeesContainer
              employeeName="Muneeb ur rehman"
              designation="Full-Stack Developer & UI/UX Designer"
              informationTag="Executive Senior Consultant"
            />
            <EmployeesContainer
              employeeName="Areeha Ahmed"
              designation="Front-end Developer"
              informationTag="Senior Developer"
            />
            <EmployeesContainer
              employeeName="Umer Nadeem"
              designation="Artificial Intelligence Expert"
              informationTag="Junior Developer"
            />
            <EmployeesContainer
              employeeName="Jahagir Ahmed"
              designation="SEO Expert"
              informationTag="Junior Consultant"
            />
          </div>
        </div>
      </div>
      {addEmployees ? (
        <AddEmployee
          setAddEmployees={setAddEmployees}
          addEmployees={addEmployees}
        />
      ) : (
        ""
      )}
    </SuperAdminDashboard>
  );
}
