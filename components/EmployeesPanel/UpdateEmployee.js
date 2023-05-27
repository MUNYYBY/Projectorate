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
  UpdateEmployeeAPI,
  createEmployee,
  getDesignations,
  getRoles,
} from "../../client/requests";
import moment from "moment";
import { useSession } from "next-auth/react";
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
export default function UpdateEmployee(props) {
  const { data: session, status } = useSession();
  const [employee, setEmployee] = useState(props.updateEmployee);
  const [designations, setDesignations] = useState(null);
  const [roles, setRoles] = useState(null);
  const [loading, setLoading] = useState(true);
  const [form] = Form.useForm();
  const handleEmployeeSubmission = async (payload) => {
    setLoading(true);
    let res = await UpdateEmployeeAPI(payload);
    console.log(res);
    if (res?.error) {
      message.error("Employee submission failed!");
      setLoading(false);
    } else {
      message.success("Employee added successfully!");
      form.resetFields();
      props.setUpdateEmployee(false);
    }
  };
  const onFinish = (values) => {
    const payload = {
      ...values,
      id: employee.id,
      userId: session.user.id,
    };
    handleEmployeeSubmission(payload);
  };
  //get all the designations in the db
  const getAllDesignations = async () => {
    const designationsResponse = await getDesignations();
    setDesignations(designationsResponse.data);
  };
  //get all the roles in the db
  const getAllRoles = async () => {
    const rolesResponse = await getRoles();
    const data = rolesResponse.data;
    data.splice(0, 1); // remove super-admin from roles
    setRoles(data);
  };
  useEffect(() => {
    getAllDesignations();
    getAllRoles();
    console.log(employee);
  }, []);
  useEffect(() => {
    if (designations && roles) {
      setLoading(false);
    }
  }, [designations, roles]);
  return (
    <div className="flex justify-center w-full">
      <div className="container flex w-full flex-col justify-center items-center">
        <div className="mb-12 text-base flex flex-col justify-center items-center">
          <h1 className="text-xl font-bold "> Update Employee</h1>
          <p>Kindly fill out the following form carefully!</p>
        </div>
        <div className="w-full">
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            style={{
              width: "100%",
            }}
            scrollToFirstError
            disabled={loading}
            initialValues={{
              ["firstName"]: employee.first_name,
              ["lastName"]: employee.last_name,
              ["email"]: employee.email,
              ["phoneNumber"]: employee.phone_number,
              ["address"]: employee.address,
              ["dateOfBirth"]: moment(employee.date_of_birth),
              ["dateOfJoining"]: moment(employee.date_of_joining),
              ["yearsOfExperience"]: employee.years_of_experience,
              ["gender"]: employee.gender,
              ["expertise"]: employee.expertise,
              ["designation"]: employee.designation,
              ["role"]: employee.role,
            }}
          >
            <Row>
              <Col xs={{ span: 22, offset: 1 }} lg={{ span: 11, offset: 1 }}>
                <Form.Item
                  name="firstName"
                  label="First Name"
                  rules={[
                    {
                      required: true,
                      message: "Please input employee's first name",
                    },
                    {
                      min: 4,
                      message: "First name must be minimum of 4 characters",
                    },
                    {
                      max: 20,
                      message: "First name must be maximum of 20 characters",
                    },
                    {
                      whitespace: true,
                      message: "Must be atleast one non-space character!",
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
                    {
                      min: 4,
                      message: "last name must be minimum of 4 characters",
                    },
                    {
                      max: 20,
                      message: "last name must be maximum of 20 characters",
                    },
                    {
                      whitespace: true,
                      message: "Must be atleast one non-space character!",
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
                    {
                      whitespace: true,
                      message: "Must be atleast one non-space character!",
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
                    {
                      whitespace: true,
                      message: "Must be atleast one non-space character!",
                    },
                    {
                      min: 4,
                      message: "Address must be minimum of 4 characters",
                    },
                    {
                      max: 40,
                      message: "Address must be maximum of 40 characters",
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
                    {
                      max: 11,
                      message: "Number should be 11 digits long",
                    },
                    {
                      min: 11,
                      message: "Number should be 11 digits long",
                    },
                  ]}
                >
                  <Input
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
                  <DatePicker
                    className="w-full"
                    disabledDate={(current) => {
                      return moment().add(-18, "years") <= current;
                    }}
                  />
                </Form.Item>
                <Form.Item
                  name="dateOfJoining"
                  label="Date of Join"
                  rules={[
                    {
                      required: true,
                      message: "Please input a date of joining for employee!",
                    },
                  ]}
                >
                  <DatePicker
                    className="w-full"
                    disabledDate={(current) => {
                      return (
                        moment().add(-1, "years") >= current ||
                        moment().add(4, "months") <= current
                      );
                    }}
                  />
                </Form.Item>
              </Col>
              <Col xs={{ span: 22, offset: 1 }} lg={{ span: 11, offset: 1 }}>
                <Form.Item
                  name="yearsOfExperience"
                  label="Years of experince"
                  rules={[
                    {
                      required: true,
                      message: "Please add years of experience!",
                    },
                  ]}
                >
                  <InputNumber className="w-full" type="number" />
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
                      message:
                        "Please input Expertise! E.g Front-end Developer",
                    },
                    {
                      whitespace: true,
                      message: "Must be atleast one non-space character!",
                    },
                    {
                      max: 30,
                      message:
                        "Maximum length of expertise can be 30 characters long!",
                    },
                    {
                      min: 4,
                      message:
                        "Minimum length of expertise can be 4 characters long!",
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
                    {
                      min: 8,
                      message: "Password must be 8 characters long!",
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
              <button
                className="bg-secondry py-2 px-3 rounded-md transition-all text-white mt-10"
                type="submit"
              >
                <p>Update Employee</p>
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
