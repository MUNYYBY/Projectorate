import SearchModule from "../../../components/Search/SearchModule";
import TabDevider from "../../../components/Devider/Devider";
import { BsPeople } from "react-icons/bs";
import SuperAdminDashboard from ".";
import EmployeesContainer from "../../../components/Employees/EmployeesContainer";
import EmployeesContainerSkelton from "../../../components/Employees/EmployeesContainerSkelton";
import AddEmployee from "../../../components/AddEmployee/AddEmployee";
import DashboardHeader from "../../../components/DashboardHeader/DashboardHeader";
import { useState, useEffect } from "react";
import { deleteEmployee, getEmployees } from "../../../client/requests";
import { useNotificationsHandler } from "../../../context/notificationContext";
import { Select } from "antd";
import EmployeesPanelContainer from "../../../components/EmployeesPanel/EmployeesPanelContainer";
import EmployeeProfile from "../../../components/Employees/Profile/EmployeesProfile";
import { EmployeesHeadMeta } from "../../../Meta/Heads";

const { Option } = Select;

export default function SuperAdminEmployees() {
  const [isEmployeePanel, setIsEmployeePanel] = useState(false);
  const [loading, setLoading] = useState(true);
  const [employeesData, setEmployeesData] = useState([]);
  const [filteredEmployeesData, setFilteredEmployeesData] = useState([]);
  const [isEmployeeProfile, setIsEmployeeProfile] = useState({ id: null });

  //Global Notificatiosn handler
  const { notifications, setNotifications } = useNotificationsHandler();

  //A bool state to check for employees change
  const [checkForNewEmployees, setCheckForNewEmployees] = useState(false);

  //Initial Skelton Animation for employees
  //This function get the new employees when
  //CheckforNewEmployees gets true
  const getNewEmployees = async () => {
    setLoading(true);
    const res = await getEmployees();
    if (res) {
      setLoading(false);
    }
    const data = res.data;
    setCheckForNewEmployees(false);
    setEmployeesData(data);
    setFilteredEmployeesData(data);
  };

  //Call the getNewEmployees function when needed
  useEffect(() => {
    if (checkForNewEmployees) {
      getNewEmployees();
    }
  }, [checkForNewEmployees]);
  useEffect(() => {
    if (loading) {
      setInterval(() => {
        setLoading(false);
      }, 2500);
    }
  }, [loading]);

  //** Initial Call */
  useEffect(() => {
    getNewEmployees();
  }, []);
  return (
    <>
      <EmployeesHeadMeta />
      {!loading ? (
        <EmployeeProfile
          isEmployeeProfile={isEmployeeProfile}
          setIsEmployeeProfile={setIsEmployeeProfile}
        />
      ) : (
        <></>
      )}

      <div className="Employees-panel">
        <DashboardHeader
          title="Employees Panel"
          type="employees"
          icon={<BsPeople size={26} />}
          setIsEmployeePanel={setIsEmployeePanel}
        />
        <div className="Search-employees-section px-4 my-4">
          <SearchModule
            type="employees"
            title="SEARCH EMPLOYEES"
            description="Take a dive in to the employees and its attributes. Find anything you are looking for in this employees"
            data={employeesData}
            setFilteredData={setFilteredEmployeesData}
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
            {!loading ? (
              <>
                {filteredEmployeesData?.map((employee) => {
                  return (
                    <div
                      key={employee.id}
                      onClick={() => setIsEmployeeProfile({ id: employee.id })}
                      className="employee-container cursor-pointer"
                    >
                      <EmployeesContainer
                        employeeId={employee.id}
                        employeeName={
                          employee.first_name + " " + employee.last_name
                        }
                        designation={employee.expertise}
                        informationTag={employee.email}
                        role={employee.Role.title}
                      />
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                <EmployeesContainerSkelton />
                <EmployeesContainerSkelton />
                <EmployeesContainerSkelton />
                <EmployeesContainerSkelton />
              </>
            )}
          </div>
        </div>
      </div>
      {/* {addEmployees ? (
        <AddEmployee
          setAddEmployees={setAddEmployees}
          addEmployees={addEmployees}
          setCheckForNewEmployees={setCheckForNewEmployees}
        />
      ) : (
        ""
      )} */}
      <EmployeesPanelContainer
        isEmployeePanel={isEmployeePanel}
        setIsEmployeePanel={setIsEmployeePanel}
      />
    </>
  );
}
