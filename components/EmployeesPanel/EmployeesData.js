import { Table, Segmented, message, Popconfirm } from "antd";
import { useEffect, useState } from "react";
import { deleteEmployee, getEmployees } from "../../client/requests";
import moment from "moment/moment";
import EmployeeProfile from "../Employees/Profile/EmployeesProfile";
import { useSession } from "next-auth/react";

export default function EmployeesData(props) {
  const { data: session, status } = useSession();
  const [tabValue, setTabValue] = useState("All");
  const [employeesData, setEmployeesData] = useState();
  const [filteredEmployeesData, setFilteredEmployeesData] = useState();
  const [loading, setLoading] = useState(false);
  const [isEmployeeProfile, setIsEmployeeProfile] = useState({ id: null });

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
    setFilteredEmployeesData(data);
  };

  //** Delete employee */
  const confirm = (id) => {
    deleteEmployee(id, session.user.id).then((res) => {
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

  function filterData(id) {
    setFilteredEmployeesData(
      employeesData.filter((e) => {
        return e.Role.title == id;
      })
    );
  }

  //Call the getNewEmployees function when needed
  useEffect(() => {
    getEmployeesData();
  }, []);

  useEffect(() => {
    if (tabValue == "All") {
      setFilteredEmployeesData(employeesData);
    } else if (tabValue == "Admins") {
      filterData("Admin");
    } else if (tabValue == "Project Managers") {
      filterData("Project Manager");
    } else if (tabValue == "Operation Managers") {
      filterData("Operation Manager");
    } else if (tabValue == "Team Leads") {
      filterData("Team Lead");
    } else if (tabValue == "Team Members") {
      filterData("Team Member");
    }
  }, [tabValue]);

  const columns = [
    {
      title: "Name",
      width: 150,
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
      width: 90,
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
      render: (_, { Designation }) => <p>{Designation.title}</p>,
      key: "designation",
    },
    {
      title: "Role",
      render: (_, { Role }) => <p>{Role.title}</p>,
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
      render: (_, param) => (
        <div className="flex">
          <button
            className="p-2 mr-2 bg-secondry rounded-md text-sm text-white"
            onClick={() => props.setUpdateEmployee(param)}
          >
            Update
          </button>
          <Popconfirm
            title="Delete Employee"
            description="Are you sure to remove this employee from projectorate?"
            onConfirm={() => {
              confirm(param.id);
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
        </div>
      ),
    },
  ];

  return (
    <>
      <EmployeeProfile
        isEmployeeProfile={isEmployeeProfile}
        setIsEmployeeProfile={setIsEmployeeProfile}
      />
      <div className="flex flex-col justify-center items-center">
        <div className="py-4">
          <Segmented
            options={[
              "All",
              "Admins",
              "Operation Managers",
              "Project Managers",
              "Team Lead",
              "Team Member",
            ]}
            value={tabValue}
            onChange={setTabValue}
          />
        </div>
        <div className="employees_panel_data_table w-full">
          <Table
            columns={columns}
            dataSource={filteredEmployeesData}
            scroll={{
              x: 1300,
            }}
          />
        </div>
      </div>
    </>
  );
}
