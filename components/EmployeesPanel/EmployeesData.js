import { Table, Segmented, message } from "antd";
import { useEffect, useState } from "react";
import { getEmployees } from "../../client/requests";
import moment from "moment/moment";

const columns = [
  {
    title: "Name",
    width: 100,
    dataIndex: "first_name" + "last_name",
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
    render: (_, { years_of_experience }) => <p>{years_of_experience} years</p>,
  },
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 100,
    render: () => <a>action</a>,
  },
];

export default function employeesData() {
  const [tabValue, setTabValue] = useState("All");
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

  //Call the getNewEmployees function when needed
  useEffect(() => {
    getEmployeesData();
  }, []);
  return (
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
  );
}
