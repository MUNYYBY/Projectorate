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
  message,
} from "antd";
import { useEffect, useState } from "react";
import {
  createEmployee,
  getDesignations,
  getRoles,
} from "../../client/requests";
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
export default function AddEmployee(props) {
  const [designations, setDesignations] = useState(null);
  const [roles, setRoles] = useState(null);
  const [loading, setLoading] = useState(true);
  const [form] = Form.useForm();
  const handleEmployeeSubmission = async (payload) => {
    setLoading(true);
    let res = await createEmployee(payload);
    console.log(res);
    if (res?.error) {
      message.error("Employee submission failed!");
      setLoading(false);
    } else {
      message.success("Employee added successfully!");
      form.resetFields();
      props.setAddEmployee(false);
    }
  };
  const onFinish = (values) => {
    // console.log("Received values of form: ", values);
    handleEmployeeSubmission(values);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="92">+92</Option>
        <Option value="91">+91</Option>
      </Select>
    </Form.Item>
  );
  //get all the designations in the db
  const getAllDesignations = async () => {
    const designationsResponse = await getDesignations();
    setDesignations(designationsResponse.data);
  };
  //get all the roles in the db
  const getAllRoles = async () => {
    const rolesResponse = await getRoles();
    setRoles(rolesResponse.data);
  };
  useEffect(() => {
    getAllDesignations();
    getAllRoles();
  }, []);
  useEffect(() => {
    if (designations && roles) {
      setLoading(false);
    }
    // console.log(designations);
    // console.log(roles);
  }, [designations, roles]);
  return (
    <div className="flex justify-center w-full">
      <div className="container flex w-full flex-col justify-center items-center">
        <div className="mb-12 text-base flex flex-col justify-center items-center">
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
            disabled={loading}
          >
            <Row>
              <Col span={12}>
                <Form.Item
                  name="firstName"
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
                  name="lastName"
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
                  name="phoneNumber"
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
                  name="dateOfBirth"
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
                  name="dateOfJoining"
                  label="Date of Join"
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
                  name="yearsOfExperience"
                  label="Years of experince"
                  rules={[
                    {
                      required: true,
                      message: "Please a add a year of experince!",
                    },
                  ]}
                >
                  <InputNumber className="w-full" />
                </Form.Item>
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
                    {designations?.map((designation) => {
                      return (
                        <Option key={designation.id} value={designation.id}>
                          {designation.title}
                        </Option>
                      );
                    })}
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
                    {roles?.map((role) => {
                      return (
                        <Option key={role.id} value={role.id}>
                          {role.title}
                        </Option>
                      );
                    })}
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
