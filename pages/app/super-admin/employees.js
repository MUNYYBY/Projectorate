import SearchModule from "../../../components/Search/SearchModule";
import TabDevider from "../../../components/Devider/Devider";
import { BsPeople } from "react-icons/bs";
import SuperAdminDashboard from ".";
import EmployeesContainer from "../../../components/Employees/EmployeesContainer";
import EmployeesContainerSkelton from "../../../components/Employees/EmployeesContainerSkelton";
import AddEmployee from "../../../components/AddEmployee/AddEmployee";
import DashboardHeader from "../../../components/DashboardHeader/DashboardHeader";
import { useState, useEffect } from "react";
import { deleteEmployee, getEmployees } from "../../../client/requests";
import { useNotificationsHandler } from "../../../context/notificationContext";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
} from "antd";

const { Option } = Select;

export default function SuperAdminEmployees({ data }) {
  const [isEmployeePanel, setIsEmployeePanel] = useState(false);
  const [loading, setLoading] = useState(true);
  const [employeesData, setEmployeesData] = useState(data);

  //Global Notificatiosn handler
  const { notifications, setNotifications } = useNotificationsHandler();

  //A bool state to check for employees change
  const [checkForNewEmployees, setCheckForNewEmployees] = useState(false);

  //Initial Skelton Animation for employees
  setInterval(() => {
    setLoading(false);
  }, 2500);
  //Delete employees function
  const deleteEmployeeClient = (id) => {
    const delRes = deleteEmployee(id);
    if (delRes) {
      setCheckForNewEmployees(true);
      setNotifications({
        placement: "bottomRight",
        message: "Employee deleted sucessfully!",
        description: "",
        type: "warning",
      });
      getNewEmployees();
      console.log(delRes);
    }
  };
  //This function get the new employees when
  //CheckforNewEmployees gets true
  const getNewEmployees = async () => {
    if (checkForNewEmployees) {
      setLoading(true);
      const res = await getEmployees();
      const data = res.data;
      setCheckForNewEmployees(false);
      setEmployeesData(data);
    }
  };

  //Call the getNewEmployees function when needed
  useEffect(() => {
    if (checkForNewEmployees) {
      getNewEmployees();
    }
  }, [checkForNewEmployees]);
  useEffect(() => {
    if (loading) {
      setInterval(() => {
        setLoading(false);
      }, 2500);
    }
  }, [loading]);
  return (
    <SuperAdminDashboard>
      <div className="Employees-panel ml-[calc(4.5rem+16rem)]">
        <DashboardHeader
          title="Employees Panel"
          type="employees"
          icon={<BsPeople size={26} />}
          setIsEmployeePanel={setIsEmployeePanel}
        />
        <div className="Search-employees-section px-4 my-4">
          <SearchModule
            title="SEARCH EMPLOYEES"
            description="Take a dive in to the employees and its attributes. Find anything you are looking for in this employees"
          />
        </div>
        <TabDevider color="bg-gray-900" width="w-full" opacity="opacity-1" />
        <div className="All-employees-stack mt-4 px-4">
          <div className="">
            <h1 className="font-semibold text-2xl opacity-80">ALL EMPLOYEES</h1>
            <p className="text-sm opacity-60 mt-1">
              A complete list of all the employees in Projectorate.
            </p>
          </div>
          <div className="Projects py-4 flex flex-col">
            {!loading ? (
              employeesData?.map((employee) => {
                return (
                  <div key={employee.id}>
                    <EmployeesContainer
                      employeeId={employee.id}
                      employeeName={
                        employee.first_name + " " + employee.last_name
                      }
                      designation={employee.expertise}
                      informationTag={employee.email}
                      deleteEmployeeClient={deleteEmployeeClient}
                    />
                  </div>
                );
              })
            ) : (
              <>
                <EmployeesContainerSkelton />
                <EmployeesContainerSkelton />
                <EmployeesContainerSkelton />
                <EmployeesContainerSkelton />
              </>
            )}
          </div>
        </div>
      </div>
      {/* {addEmployees ? (
        <AddEmployee
          setAddEmployees={setAddEmployees}
          addEmployees={addEmployees}
          setCheckForNewEmployees={setCheckForNewEmployees}
        />
      ) : (
        ""
      )} */}
      <Drawer
        title="Create a new account"
        className="w-full"
        onClose={() => setIsEmployeePanel(false)}
        open={isEmployeePanel}
        bodyStyle={{ paddingBottom: 80 }}
        extra={
          <Space>
            <Button onClick={() => setIsEmployeePanel(false)}>Cancel</Button>
            <Button onClick={() => setIsEmployeePanel(false)} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: "Please enter user name" }]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="url"
                label="Url"
                rules={[{ required: true, message: "Please enter url" }]}
              >
                <Input
                  style={{ width: "100%" }}
                  addonBefore="http://"
                  addonAfter=".com"
                  placeholder="Please enter url"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="owner"
                label="Owner"
                rules={[{ required: true, message: "Please select an owner" }]}
              >
                <Select placeholder="Please select an owner">
                  <Option value="xiao">Xiaoxiao Fu</Option>
                  <Option value="mao">Maomao Zhou</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="type"
                label="Type"
                rules={[{ required: true, message: "Please choose the type" }]}
              >
                <Select placeholder="Please choose the type">
                  <Option value="private">Private</Option>
                  <Option value="public">Public</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="approver"
                label="Approver"
                rules={[
                  { required: true, message: "Please choose the approver" },
                ]}
              >
                <Select placeholder="Please choose the approver">
                  <Option value="jack">Jack Ma</Option>
                  <Option value="tom">Tom Liu</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="dateTime"
                label="DateTime"
                rules={[
                  { required: true, message: "Please choose the dateTime" },
                ]}
              >
                <DatePicker.RangePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: "please enter url description",
                  },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="please enter url description"
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </SuperAdminDashboard>
  );
}
// This gets called on every server-side render
export async function getServerSideProps() {
  // Fetch data from external API
  let data;
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + `/employee/get-employees`
    );
    data = res.json();
  } catch (error) {
    console.log("Error at server-side for employees: ", error);
  }
  // Pass data to the page via props
  return { props: data };
}
