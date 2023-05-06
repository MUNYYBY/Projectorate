import { Drawer, Popconfirm, Tooltip } from "antd";
import { message } from "antd";
import { useEffect, useState } from "react";
import React from "react";
import { TiUserAddOutline } from "react-icons/ti";

import {
  AssignEmployeeToTeam,
  getProjectEmployees,
} from "../../../client/requests";
export default function AssignEmployee(props) {
  const [loading, setLoading] = useState(true);
  const [searchResults, setSearchResults] = useState([]);
  function AssignEmployeeConfirm(employeeId) {
    AssignEmployeeToTeam(props.teamId, employeeId).then((res) => {
      console.log(res);
      if (!res.error) {
        message.success("Employee Sucessfully Added to the Team!");
        props.setAssignEmployeesPanel(false);
        props.setisNewEmployee(true);
      } else {
        if (res.error.data.error == 404) {
          message.error("Project, team or employee not found!");
        } else if (res.error.data.error == 403) {
          message.warning("Employee is already assigned to this project!");
        }
      }
    });
  }
  function OnAssignEmployeeCancel() {}

  //** Fetch all avaible employees */
  useEffect(() => {
    getProjectEmployees(props.projectId).then((res) => {
      if (!res.error) {
        setSearchResults(res.result);
        setLoading(true);
        console.log(res.result);
      }
    });
  }, []);
  return (
    <Drawer
      title="Assign Employee"
      onClose={() => props.setAssignEmployeesPanel(false)}
      open={props.assignEmployeesPanel}
      bodyStyle={{ paddingBottom: 80 }}
    >
      <h1 className="opacity-50">
        Note: Only the employees which are added in to project of this team are
        allowed to assign. If you want to add another employee to this team,
        first add him/her to this team's project!
      </h1>
      <div className="mt-4 search-results">
        {searchResults.length == 0 && loading ? (
          <div className="w-full flex flex-col justify-center items-center">
            <svg
              class="animate-spin -ml-1 h-10 w-10 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        ) : (
          <>
            <h1 className="mb-4 font-bold text-lg">Available Employees</h1>
          </>
        )}
        {searchResults.map((employee, index) => {
          return (
            <>
              <div
                key={employee.id + index}
                className="employee-card flex flex-row justify-between items-center py-4 px-4 mb-2 bg-gray-800 bg-opacity-50 rounded-lg border-2 border-gray-600"
              >
                <div className="flex flex-row justify-center items-center">
                  <div className="bg-gray-600 bg-opacity-50 rounded-md h-14 w-14 flex justify-center items-center">
                    <p className="font-extrabold text-2xl opacity-40">
                      {employee.first_name[0]}
                    </p>
                  </div>
                  <div className="ml-2">
                    <h1 className="font-semibold text-lg">
                      {employee.first_name} {employee.last_name}
                    </h1>
                    <h1 className="m-0 text-md">@{employee.email}</h1>
                  </div>
                </div>
                <Popconfirm
                  title={`Are you sure you want to add ${employee.first_name} to this project?`}
                  onConfirm={() => AssignEmployeeConfirm(employee.id)}
                  onCancel={OnAssignEmployeeCancel}
                  okText="Confirm"
                  cancelText="No"
                  placement="topLeft"
                >
                  <button
                    className="bg-primary py-1 px-2 rounded-md flex flex-row justify-center items-center"
                    // onClick={() => !setIsCreateProject(!isCreateProject)}
                  >
                    <TiUserAddOutline size={26} />
                  </button>
                </Popconfirm>
              </div>
            </>
          );
        })}
      </div>
    </Drawer>
  );
}