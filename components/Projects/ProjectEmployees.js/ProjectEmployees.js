import { Table, Segmented, message, Popconfirm } from "antd";
import { useEffect, useState } from "react";
import { deleteEmployee, getEmployees } from "../../../client/requests";
import moment from "moment/moment";

export default function ProjectEmployees() {
  const [employeesData, setEmployeesData] = useState();
  const [loading, setLoading] = useState(false);
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
      dataIndex: "first_name",
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
    // {
    //   title: "Action",
    //   key: "id",
    //   fixed: "right",
    //   width: 100,
    //   render: (_, { id }) => (
    //     <Popconfirm
    //       title="Delete Employee"
    //       description="Are you sure to remove this employee from projectorate?"
    //       onConfirm={() => {
    //         confirm(id);
    //       }}
    //       onCancel={cancel}
    //       okText="Confirm"
    //       cancelText="No"
    //       placement="topLeft"
    //     >
    //       <button className="p-2 bg-red-500 rounded-md text-sm text-white">
    //         Delete
    //       </button>
    //     </Popconfirm>
    //   ),
    // },
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
    <div className="flex flex-col justify-center items-center -mt-4">
      <div className="project_employees_data_table w-full">
        <Table
          columns={columns}
          dataSource={employeesData}
          scroll={{
            x: 100,
          }}
          className="rounded-none"
          style={{ borderRadius: "0 !impotant" }}
        />
      </div>
    </div>
  );
}
