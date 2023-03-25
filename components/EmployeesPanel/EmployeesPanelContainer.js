import { useState, useEffect } from "react";

import { IoIosAdd } from "react-icons/io";
import EmployeesPanel from "./EmployeesPanel";
import { Drawer, Tooltip } from "antd";

export default function EmployeesPanelContainer(props) {
  //state to check if user wants to add new employee
  const [addEmployee, setAddEmployee] = useState(false);
  return (
    <Drawer
      title="Employees Panel"
      onClose={() => props.setIsEmployeePanel(false)}
      open={props.isEmployeePanel}
      bodyStyle={{ paddingBottom: 80 }}
      width="100%"
      extra={
        <Tooltip
          placement="bottom"
          title="Add new employee, project manager, modetor to your company"
          mouseEnterDelay={0.05}
        >
          <button
            className="bg-primary py-1 px-3 rounded-md flex flex-row justify-center items-center transition-all"
            onClick={() => setAddEmployee(!addEmployee)}
          >
            {addEmployee ? (
              "Cancel"
            ) : (
              <>
                {" "}
                <IoIosAdd size={26} />
                <p>Add New Employee</p>
              </>
            )}
          </button>
        </Tooltip>
      }
    >
      <EmployeesPanel
        addEmployee={addEmployee}
        setAddEmployee={setAddEmployee}
      />
    </Drawer>
  );
}
