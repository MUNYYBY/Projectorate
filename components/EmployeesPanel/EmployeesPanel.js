import EmployeesData from "./EmployeesData";
import AddEmployee from "./AddEmployee";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import { useState, useEffect } from "react";
import UpdateEmployee from "./UpdateEmployee";
export default function EmployeesPanel(props) {
  return (
    <div className="Employees_panel">
      {props.addEmployee ? (
        <AddEmployee setAddEmployee={props.setAddEmployee} />
      ) : props.updateEmployee ? (
        <UpdateEmployee
          updateEmployee={props.updateEmployee}
          setUpdateEmployee={props.setUpdateEmployee}
        />
      ) : (
        <EmployeesData setUpdateEmployee={props.setUpdateEmployee} />
      )}
    </div>
  );
}
