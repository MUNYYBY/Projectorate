import { Table, Segmented, message, Popconfirm } from "antd";
import { useEffect, useState } from "react";
import { deleteEmployee, getEmployees } from "../../client/requests";
import moment from "moment/moment";
import EmployeeProfile from "../Employees/Profile/EmployeesProfile";

export default function EmployeesData() {
  const [tabValue, setTabValue] = useState("All");
  const [employeesData, setEmployeesData] = useState();
  const [loading, setLoading] = useState(false);
  const [isEmployeeProfile, setIsEmployeeProfile] = useState({ id: null });
  //Delete employees function
  const deleteEmployeeClient = (id) => {
    const delRes = deleteEmployee(id);
    if (delRes) {
      setCheckForNewEmployees(true);
      message.success("Employee deleted sucessfully!");
      getEmployees();
      console.log(delRes);
    }
  };
  //This function get the new employees when
  //CheckforNewEmployees gets true
  const getEmployeesData = async () => {
    setLoading(true);
    const res = await getEmployees();
    const data = res.data;
    console.log("EmployeesData:", data);
    if (data) {
      setLoading(false);
    }
    setEmployeesData(data);
  };

  const columns = [
    {
      title: "Name",
      width: 100,
      render: (_, { first_name, last_name, id }) => (
        <div
          className="underline cursor-pointer"
          onClick={() => setIsEmployeeProfile({ id })}
        >
          <h1>
            {first_name} {last_name}
          </h1>
        </div>
      ),
      key: "name",
      fixed: "left",
    },
    {
      title: "Age",
      width: 100,
      dataIndex: "date_of_birth",
      key: "age",
      sorter: true,
      render: (_, { date_of_birth }) => {
        var age = moment().diff(date_of_birth, "years", false);
        return <p>{age} years</p>;
      },
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phone_number",
      key: "phone_number",
    },
    {
      title: "Designation",
      dataIndex: "designation",
      key: "designation",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Expertise",
      dataIndex: "expertise",
      key: "expertise",
    },
    {
      title: "Years of Experince",
      dataIndex: "years_of_experience",
      key: "years_of_experience",
      render: (_, { years_of_experience }) => (
        <p>{years_of_experience} years</p>
      ),
    },
    {
      title: "Action",
      key: "id",
      fixed: "right",
      width: 100,
      render: (_, { id }) => (
        <Popconfirm
          title="Delete Employee"
          description="Are you sure to remove this employee from projectorate?"
          onConfirm={() => {
            confirm(id);
          }}
          onCancel={cancel}
          okText="Confirm"
          cancelText="No"
          placement="topLeft"
        >
          <button className="p-2 bg-red-500 rounded-md text-sm text-white">
            Delete
          </button>
        </Popconfirm>
      ),
    },
  ];

  const confirm = (id) => {
    deleteEmployee(id).then((res) => {
      console.log(res);
      if (!res.error) {
        //if employees is sucessfully deleted reload all employees and show message
        getEmployeesData();
        message.success(
          `Sucessfully removed: ${res.data.deleteEmployee.first_name}`
        );
      } else {
        message.error(`Error while removing employee!`);
      }
    });
  };
  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };

  //Call the getNewEmployees function when needed
  useEffect(() => {
    getEmployeesData();
  }, []);
  return (
    <>
      <EmployeeProfile
        isEmployeeProfile={isEmployeeProfile}
        setIsEmployeeProfile={setIsEmployeeProfile}
      />
      <div className="flex flex-col justify-center items-center">
        <div className="py-4">
          <Segmented
            options={["All", "Admins", "Employees", "Project Managers"]}
            value={tabValue}
            onChange={setTabValue}
          />
        </div>
        <div className="employees_panel_data_table w-full">
          <Table
            columns={columns}
            dataSource={employeesData}
            scroll={{
              x: 1300,
            }}
          />
        </div>
      </div>
    </>
  );
}
