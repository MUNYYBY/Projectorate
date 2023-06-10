import { useState, useEffect } from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import { AiOutlineUserAdd } from "react-icons/ai";
import { GoReport } from "react-icons/go";

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
  Modal,
  Row,
  Select,
  message,
} from "antd";
import { IoIosHelpCircle } from "react-icons/io";
import { useNotificationsHandler } from "../../context/notificationContext";
export default function LoginBox({
  setIsClicked,
  setEmail,
  setPassword,
  loading,
  errorMessage,
}) {
  const [inputClassString, setInputClassString] = useState(
    "h-12 bg-gray-700 rounded-sm px-3 "
  );

  const { notifications, setNotifications } = useNotificationsHandler();

  //** Set form values */
  function handleTeamLeadValues() {
    form.setFieldsValue({
      password: "as$52dk*l223",
      email: "team_lead@projectorate.org",
    });
    setNotifications({
      placement: "topRight",
      message: "Added dummy project manager credentials!",
      description: "",
      type: "sucess",
    });
  }
  function handleTeamMemberValues() {
    form.setFieldsValue({
      password: "@!2jdis34_we",
      email: "team_member@projectorate.org",
    });
    setNotifications({
      placement: "topRight",
      message: "Added dummy team member credentials!",
      description: "",
      type: "sucess",
    });
  }

  const [form] = Form.useForm();

  const onFinish = (values) => {
    setIsClicked(true);
    setEmail(values.email);
    setPassword(values.password);
  };

  useEffect(() => {
    if (errorMessage) {
      setInputClassString(inputClassString + "border-red-500 border-2");
    } else {
      setInputClassString("h-12 bg-gray-700 rounded-sm px-3 ");
    }
  }, [errorMessage]);

  //** Model */
  //** For team lead */
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  //** For team member */
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const showModal1 = () => {
    setIsModalOpen1(true);
  };
  const handleOk1 = () => {
    setIsModalOpen1(false);
  };
  const handleCancel1 = () => {
    setIsModalOpen1(false);
  };

  return (
    <>
      <div
        className="bg-gray-900 rounded-md shadow-xl mx-2 p-4 md:p-9 border-black flex flex-col justify-center items-center sm:w-96 w-full"
        style={{ minHeight: "32rem", maxHeight: "38rem" }}
      >
        <div className="Input-container w-full flex flex-col justify-center items-center">
          <div className="flex w-full flex-col justify-center items-center mb-4">
            <h1 className="text-4xl font-demo">Login</h1>
            <p className="pt-2 opacity-60 text-xs sm:text-sm sm:w-88 w-full text-center">
              Please enter your credentials! If you do not have access to the
              system please contact the adminstration of the system
            </p>
          </div>
          {/* <div className="dummy-credentials mb-2 py-3 px-3 rounded-md border-[1.5px] border-gray-500 bg-gray-700 w-full opacity-70 hover:opacity-100 transition-all">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <AiOutlineUserAdd size={18} />
                <p className="text-[12px] ml-1">
                  <span
                    className="text-blue-400 font-bold cursor-pointer"
                    onClick={() => handleTeamLeadValues()}
                  >
                    Team Lead
                  </span>{" "}
                  dummy credentials
                </p>
              </div>
              <div className="rounded-full cursor-pointer" onClick={showModal}>
                <IoIosHelpCircle size={20} />
              </div>
            </div>
          </div>
          <div className="dummy-credentials mb-2 py-3 px-3 rounded-md border-[1.5px] border-gray-500 bg-gray-700 w-full opacity-70 hover:opacity-100 transition-all">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <AiOutlineUserAdd size={18} />
                <p className="text-[12px] ml-1">
                  <span
                    className="text-blue-400 font-bold cursor-pointer"
                    onClick={() => handleTeamMemberValues()}
                  >
                    Team Member
                  </span>{" "}
                  dummy credentials
                </p>
              </div>
              <div className="rounded-full cursor-pointer" onClick={showModal1}>
                <IoIosHelpCircle size={20} />
              </div>
            </div>
          </div> */}
          <Form
            form={form}
            name="signin"
            onFinish={onFinish}
            style={{
              width: "100%",
            }}
            initialValues={{ email: "", password: "" }}
            scrollToFirstError
            disabled={loading}
            layout="vertical"
          >
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
              <Input placeholder="Enter your email" />
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
              <Input.Password placeholder="Enter your password" />
            </Form.Item>
            {errorMessage ? (
              <div className="error-message flex flex-row  items-center">
                <div className="error-icon mr-2">
                  <RiErrorWarningLine size={28} className="text-red-500" />
                </div>
                <p className="text-red-500 text-md">{errorMessage}</p>
              </div>
            ) : (
              ""
            )}
            <div className="submission-section flex flex-col mt-5 justify-center items-center">
              <p className="text-xs text-center mb-3 opacity-60 sm:w-64">
                By logging in you are agreeing to the company user terms and
                conditions
              </p>
              <button
                className={
                  !loading
                    ? "bg-secondry px-5 py-3 rounded-sm w-full"
                    : "bg-secondry px-5 py-3 rounded-sm opacity-60 w-full"
                }
                type="submit"
                disabled={loading}
              >
                LOGIN
              </button>
            </div>
          </Form>
        </div>
      </div>
      <Modal
        title="Team Lead Credentials"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="credentials-model-content">
          <p className="text-sm opacity-80">
            Use this option to use the team lead credential to login to system.
            These credentials are generated, as projectorate is controlled by a
            stakeholder and does not have any public access to the system. Hence
            users can use these credentials to access the system. These
            credentials are only meant for demonstration of the system, and they
            may get revoked at anytime.
          </p>
          <h1 className="mt-3 font-semibold text-sm">
            What this credentials have access to?
          </h1>
          <p className="text-sm opacity-80">
            The team lead have the following features restriction/access to the
            system:
          </p>
          <ol className="list-decimal list-inside opacity-80">
            <li>Can not manage employees</li>
            <li>Can not view system logs</li>
            <li>Can not manage projects</li>
            <li>Can manage teams</li>
            <li>Can open tickets and assign them to employees</li>
            <li>Can share resources or submit work</li>
            <li>Can interact with tickets board</li>
          </ol>
          <p className="mt-3 text-sm">
            <b>Note:</b> If you want to have uppar level access to the system
            for demonstration kindly contact adminstration of the system
          </p>
        </div>
      </Modal>
      <Modal
        title="Team Member Credentials"
        open={isModalOpen1}
        onOk={handleOk1}
        onCancel={handleCancel1}
        footer={null}
      >
        <div className="credentials-model-content">
          <p className="text-sm opacity-80">
            Use this option to use the team member credential to login to
            system. These credentials are generated, as projectorate is
            controlled by a stakeholder and does not have any public access to
            the system. Hence users can use these credentials to access the
            system. These credentials are only meant for demonstration of the
            system, and they may get revoked at anytime.
          </p>
          <h1 className="mt-3 font-semibold text-sm">
            What this credentials have access to?
          </h1>
          <p className="text-sm opacity-80">
            The team member have the following features restriction/access to
            the system:
          </p>
          <ol className="list-decimal list-inside opacity-80">
            <li>Can not manage employees</li>
            <li>Can not view system logs</li>
            <li>Can not manage projects</li>
            <li>Can not manage teams</li>
            <li>Can not open tickets or assign them to employees</li>
            <li>Can not share resources but can submit work</li>
            <li>Can interact with tickets board</li>
          </ol>
          <p className="mt-3 text-sm">
            <b>Note:</b> If you want to have uppar level access to the system
            for demonstration kindly contact adminstration of the system
          </p>
        </div>
      </Modal>
    </>
  );
}
