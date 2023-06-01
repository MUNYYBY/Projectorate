import { Drawer, Empty, Popconfirm, Tooltip } from "antd";
import { Form, Input, message } from "antd";
import { useEffect, useState } from "react";
import React from "react";
import { TiUserAddOutline } from "react-icons/ti";
import { AiOutlineSearch } from "react-icons/ai";

import {
  AssignEmployeeToProject,
  SearchEmployee,
} from "../../../client/requests";
export default function AssignEmployee(props) {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [form] = Form.useForm();
  function onFinish(values) {
    console.log(values);
    SearchEmployee(values.SearchEmployee).then((res) => {
      if (!res.error) {
        setSearchResults(res.data.result);
        console.log(res.data.result);
      }
    });
  }
  function AssignEmployeeConfirm(projectId, employeeId) {
    AssignEmployeeToProject(projectId, employeeId, props.ownerId).then(
      (res) => {
        console.log(res);
        if (!res.error) {
          message.success("Employee Sucessfully Added to the project!");
          props.setAssignEmployeesPanel(false);
          props.setisNewEmployee(true);
        } else {
          message.error(
            "Some Error Occured while adding Employee to the project!"
          );
        }
      }
    );
  }
  function OnAssignEmployeeCancel() {}
  return (
    <Drawer
      title="Assign Employee"
      onClose={() => props.setAssignEmployeesPanel(false)}
      open={props.assignEmployeesPanel}
      bodyStyle={{ paddingBottom: 80 }}
    >
      <Form
        form={form}
        name="assignEmployees"
        onFinish={onFinish}
        style={{
          width: "100%",
        }}
        scrollToFirstError
        disabled={loading}
        type="submit"
      >
        <Form.Item
          name="SearchEmployee"
          rules={[
            {
              required: true,
              message: "Please input something to search for employees",
            },
          ]}
        >
          <Input placeholder="Search Employees" />
        </Form.Item>
        <button
          className="bg-secondry w-full py-2 px-3 rounded-md transition-all text-white flex justify-center items-center"
          type="submit"
        >
          <AiOutlineSearch size={18} />
          <p className="ml-2">Search</p>
        </button>
      </Form>
      <div className="mt-4 search-results">
        {loading && searchResults.length == 0 ? (
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
                strokeWidth="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        ) : searchResults.length == 0 ? (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="No employees found!"
          />
        ) : (
          <></>
        )}
        {searchResults.map((employee, index) => {
          return (
            <>
              <div
                key={employee.id + index}
                className="employee-card flex flex-row justify-between items-center py-4 px-4 mb-2 bg-gray-800 bg-opacity-50 rounded-lg border-2 border-gray-600"
              >
                <div className="flex flex-row justify-center items-center">
                  <div className="bg-gray-600 bg-opacity-50 rounded-md h-11 w-11 flex justify-center items-center">
                    <p className="font-extrabold text-xl opacity-40">
                      {employee.first_name[0]}
                    </p>
                  </div>
                  <div className="ml-2">
                    <h1 className="font-semibold text-base">
                      {employee.first_name} {employee.last_name}
                    </h1>
                    <h1 className="m-0 text-sm">@{employee.email}</h1>
                  </div>
                </div>
                <Popconfirm
                  title={`Are you sure you want to add ${employee.first_name} to this project?`}
                  onConfirm={() =>
                    AssignEmployeeConfirm(props.projectId, employee.id)
                  }
                  onCancel={OnAssignEmployeeCancel}
                  okText="Confirm"
                  cancelText="No"
                  placement="topLeft"
                >
                  <button
                    className="bg-primary py-1 px-2 rounded-md flex flex-row justify-center items-center"
                    // onClick={() => !setIsCreateProject(!isCreateProject)}
                  >
                    <TiUserAddOutline size={20} />
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
