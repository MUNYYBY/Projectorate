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
import axios from "axios";

export default function SuperAdminEmployees({ data }) {
  const [addEmployees, setAddEmployees] = useState(false);
  const [loading, setLoading] = useState(true);
  const [employeesData, setEmployeesData] = useState(data);
  const [checkForNewEmployees, setCheckForNewEmployees] = useState(false);
  const addEmployeesHandler = () => {
    // e.preventDefault();
    setAddEmployees(true);
  };
  // console.log("Server-side data: ", data);
  setInterval(() => {
    setLoading(false);
  }, 2500);
  const deleteEmployeeClient = (id) => {
    const delRes = deleteEmployee(id);
    if (delRes) {
      setCheckForNewEmployees(true);
      getNewEmployees();
      console.log(delRes);
    }
  };
  const getNewEmployees = async () => {
    if (checkForNewEmployees) {
      setLoading(true);
      const res = await getEmployees();
      const data = res.data;
      setCheckForNewEmployees(false);
      setEmployeesData(data);
    }
  };
  useEffect(() => {
    getNewEmployees();
  }, [checkForNewEmployees]);
  useEffect(() => {
    if (loading) {
      setInterval(() => {
        setLoading(false);
      }, 2500);
    }
  }, [loading]);
  return (
    <SuperAdminDashboard>
      <div className="Employees-panel ml-[calc(4.5rem+16rem)]">
        <DashboardHeader
          title="Employees Panel"
          type="employees"
          icon={<BsPeople size={26} />}
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
            {!loading ? (
              employeesData?.map((employee) => {
                return (
                  <div key={employee.id}>
                    <EmployeesContainer
                      employeeId={employee.id}
                      employeeName={
                        employee.first_name + " " + employee.last_name
                      }
                      designation={employee.expertise}
                      informationTag={employee.email}
                      deleteEmployeeClient={deleteEmployeeClient}
                    />
                  </div>
                );
              })
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
      {addEmployees ? (
        <AddEmployee
          setAddEmployees={setAddEmployees}
          addEmployees={addEmployees}
          setCheckForNewEmployees={setCheckForNewEmployees}
        />
      ) : (
        ""
      )}
    </SuperAdminDashboard>
  );
}
// This gets called on every server-side render
export async function getServerSideProps() {
  // Fetch data from external API
  let data;
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + `/employee/get-employees`
    );
    data = res.json();
  } catch (error) {
    console.log("Error at server-side for employees: ", error);
  }
  // Pass data to the page via props
  return { props: data };
}
