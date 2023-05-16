import { useState, useEffect } from "react";

import { IoIosAdd } from "react-icons/io";
import EmployeesPanel from "./EmployeesPanel";
import { Drawer, Tooltip } from "antd";

export default function EmployeesPanelContainer(props) {
  //state to check if user wants to add new employee
  const [addEmployee, setAddEmployee] = useState(false);
  const [updateEmployee, setUpdateEmployee] = useState(false);
  return (
    <Drawer
      title="Employees Panel"
      onClose={() => props.setIsEmployeePanel(false)}
      open={props.isEmployeePanel}
      bodyStyle={{ paddingBottom: 80, paddingRight: 10, paddingLeft: 10 }}
      width="100%"
      extra={
        <Tooltip
          placement="bottomRight"
          title="Add new employee, project manager, modetor to your company"
          mouseEnterDelay={0.05}
        >
          <button
            className="bg-primary py-1 px-3 rounded-md flex flex-row justify-center items-center transition-all"
            onClick={() => {
              updateEmployee
                ? setUpdateEmployee(false)
                : setAddEmployee(!addEmployee);
            }}
          >
            {addEmployee || updateEmployee ? (
              "Cancel"
            ) : (
              <>
                {" "}
                <div className="sm:flex hidden">
                  <IoIosAdd size={26} />
                </div>
                <p>
                  Add <span className="sm:flex hidden">New</span> Employee
                </p>
              </>
            )}
          </button>
        </Tooltip>
      }
    >
      <EmployeesPanel
        addEmployee={addEmployee}
        setAddEmployee={setAddEmployee}
        updateEmployee={updateEmployee}
        setUpdateEmployee={setUpdateEmployee}
      />
    </Drawer>
  );
}
