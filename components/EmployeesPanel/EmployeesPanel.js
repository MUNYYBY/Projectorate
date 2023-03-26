import EmployeesData from "./EmployeesData";
import AddEmployee from "./AddEmployee";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import { useState, useEffect } from "react";
export default function EmployeesPanel(props) {
  return (
    <div className="Employees_panel">
      <Breadcrumb
        items={[
          {
            href: "",
            title: <HomeOutlined />,
          },
          {
            href: "",
            title: (
              <>
                <UserOutlined />
                <span>Application List</span>
              </>
            ),
          },
          {
            title: "Application",
          },
        ]}
      />
      {props.addEmployee ? (
        <AddEmployee setAddEmployee={props.setAddEmployee} />
      ) : (
        <EmployeesData />
      )}
    </div>
  );
}
