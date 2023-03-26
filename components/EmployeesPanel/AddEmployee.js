import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from "antd";
import { useState } from "react";
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 7,
    },
    sm: {
      span: 5,
    },
  },
  wrapperCol: {
    xs: {
      span: 22,
    },
    sm: {
      span: 18,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 8,
      offset: 0,
    },
  },
};
export default function AddEmployee() {
  const [employeePayload, setEmployeePayload] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    dateOfBirth: "",
    expertise: "",
    designation: "",
    role: "",
    dateOfJoining: "",
    dateOfBirth: "",
    yearsOfExperience: "",
    gender: "",
    address: "",
  });
  const handleEmployeeSubmission = async (e) => {
    e.preventDefault();
    // console.log(employeePayload);
    if (employeePayload.email != "" && employeePayload.password) {
      let res = createEmployee(employeePayload);
      console.log(res);
      if (res) {
        setNotifications({
          placement: "bottomRight",
          message: "New Employee Added to the Projectorate",
          description: "",
          type: "sucess",
        });
        setIsSubmitClicked(true);
        setTimeout(() => {
          props.setAddEmployees(false);
          props.setCheckForNewEmployees(true);
        }, 2000);
      }
    }
  };
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="93">+92</Option>
        <Option value="91">+91</Option>
      </Select>
    </Form.Item>
  );
  return (
    <div className="flex justify-center w-full">
      <div className="container flex w-full flex-col justify-center items-center">
        <div className="mb-12 text-black flex flex-col justify-center items-center">
          <h1 className="text-xl font-bold "> Add New Employee</h1>
          <p>Kindly fill out the following form carefully!</p>
        </div>
        <div className="w-full">
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
              prefix: "86",
            }}
            style={{
              width: "100%",
            }}
            scrollToFirstError
          >
            <Row>
              <Col span={12}>
                <Form.Item
                  name="first_name"
                  label="First Name"
                  rules={[
                    {
                      required: true,
                      message: "Please input employee's first name",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="last_name"
                  label="Last Name"
                  rules={[
                    {
                      required: true,
                      message: "Please input employee's last name",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="email"
                  label="E-mail"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="address"
                  label="Address"
                  rules={[
                    {
                      required: true,
                      message: "Please add employee address",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="phone"
                  label="Phone Number"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                  ]}
                >
                  <Input
                    addonBefore={prefixSelector}
                    style={{
                      width: "100%",
                    }}
                  />
                </Form.Item>

                <Form.Item
                  name="date_of_birth"
                  label="Date of Birth"
                  rules={[
                    {
                      required: true,
                      message: "Please input a date of birth!",
                    },
                  ]}
                >
                  <DatePicker />
                </Form.Item>
                <Form.Item
                  name="date_of_joining"
                  label="Date of Joining"
                  rules={[
                    {
                      required: true,
                      message: "Please input a date of joing for employee!",
                    },
                  ]}
                >
                  <DatePicker />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="gender"
                  label="Gender"
                  rules={[
                    {
                      required: true,
                      message: "Please a gender!",
                    },
                  ]}
                >
                  <Select placeholder="select gender">
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name="expertise"
                  label="Expertise"
                  rules={[
                    {
                      required: true,
                      message: "Please input Expertise",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="designation"
                  label="Designation"
                  rules={[
                    {
                      required: true,
                      message: "Please select a designation!",
                    },
                  ]}
                >
                  <Select placeholder="select your A designation for employee">
                    <Option value="senior">Senior</Option>
                    <Option value="associate">Associate</Option>
                    <Option value="beginner">Beginner</Option>
                    <Option value="intern">Intern</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name="role"
                  label="Role"
                  rules={[
                    {
                      required: true,
                      message: "Please select a role!",
                    },
                  ]}
                >
                  <Select placeholder="select your A role for employee">
                    <Option value="admin">Admin</Option>
                    <Option value="project manager">Project Manager</Option>
                    <Option value="operations manager">
                      Operations Manger
                    </Option>
                    <Option value="employee">Employee</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name="password"
                  label="Password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                  hasFeedback
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  name="confirm"
                  label="Confirm Password"
                  dependencies={["password"]}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(
                            "The two passwords that you entered do not match!"
                          )
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password />
                </Form.Item>
              </Col>
            </Row>
            <div className="flex flex-col justify-center items-center w-full">
              {/* <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(new Error("Should accept agreement")),
                  },
                ]}
              >
                <Checkbox>
                  I have read the <a href="">agreement</a>
                </Checkbox>
              </Form.Item> */}
              <button
                className="bg-secondry py-2 px-3 rounded-md transition-all text-white "
                type="submit"
              >
                <p>Add Employee</p>
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
