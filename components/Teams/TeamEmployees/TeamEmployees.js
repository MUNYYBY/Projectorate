import { Table, Segmented, message, Popconfirm } from "antd";
import { useEffect, useState } from "react";
import {
  DeleteEmployeeFromProject,
  DeleteEmployeeFromTeam,
  deleteEmployee,
  getEmployees,
  getTeamEmployees,
} from "../../../client/requests";
import moment from "moment/moment";
import { getProjectEmployees } from "../../../client/requests";
import AuthorityCheck from "../../../Permissions/AuthorityCheck";

export default function TeamEmployees({
  teamId,
  isNewEmployee,
  setisNewEmployee,
  setIsEmployeeProfile,
  ownerId,
}) {
  const [employeesData, setEmployeesData] = useState();
  const [loading, setLoading] = useState(false);

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
      render: (_, { Designation }) => (
        <div>
          <h1>{Designation.title}</h1>
        </div>
      ),
    },
    // {
    //   title: "Role",
    //   dataIndex: "role",
    //   key: "role",
    // },
    {
      title: "Expertise",
      dataIndex: "expertise",
      key: "expertise",
    },
    {
      title: "Action",
      key: "id",
      fixed: "right",
      width: 100,
      render: (_, { id }) => (
        <AuthorityCheck grantPermissionFor="manage_teams">
          <Popconfirm
            title={`Remove Employee from project`}
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
              Remove
            </button>
          </Popconfirm>
        </AuthorityCheck>
      ),
    },
  ];

  //This function get the new employees when
  //CheckforNewEmployees gets true
  const getEmployeesData = async () => {
    setLoading(true);
    const res = await getTeamEmployees(teamId).then((res) => {
      const data = res.result;
      console.log("TeamEmployeesData:", data);
      if (data) {
        setLoading(false);
      }
      setEmployeesData(data);
    });
  };

  const confirm = (id) => {
    DeleteEmployeeFromTeam(id, teamId, ownerId).then((res) => {
      console.log(res);
      if (!res.error) {
        //if employees is sucessfully deleted reload all employees and show message
        getEmployeesData();
        message.success(`Sucessfully removed employee from Team!`);
      } else {
        message.error(`Error while removing employee from team!`);
      }
    });
  };
  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };

  //fetch employee if a new employee has been added
  useEffect(() => {
    if (isNewEmployee) {
      getEmployeesData();
      setisNewEmployee(false);
    }
  }, [isNewEmployee]);

  //Call the getNewEmployees function when needed
  useEffect(() => {
    getEmployeesData();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center -mt-4">
      <div className="project_employees_data_table w-full">
        <Table
          columns={columns}
          dataSource={employeesData}
          scroll={{
            x: 1000,
          }}
          className="rounded-t-none"
          loading={loading}
        />
      </div>
    </div>
  );
}
