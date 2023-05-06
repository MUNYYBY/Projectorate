import { Drawer, Popconfirm, Tooltip } from "antd";
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
    AssignEmployeeToProject(projectId, employeeId).then((res) => {
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
    });
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