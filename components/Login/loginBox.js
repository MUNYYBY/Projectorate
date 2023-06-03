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
  Row,
  Select,
  message,
} from "antd";
import { IoIosHelpCircle } from "react-icons/io";
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
  return (
    <div
      className="bg-gray-900 rounded-md shadow-xl m-2 p-4 md:p-9 border-black flex flex-col justify-center items-center"
      style={{ height: "36rem" }}
    >
      <div className="Input-container flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center mb-4">
          <h1 className="text-4xl font-demo">Login</h1>
          <p className="pt-2 opacity-60 text-sm w-88 text-center">
            Please enter your credentials! If you do not have access to the
            please use the following dummy credentials
          </p>
        </div>
        <div className="dummy-credentials mb-2 py-3 px-3 rounded-md border-[1.5px] border-gray-500 bg-gray-700 w-full opacity-70 hover:opacity-100 transition-all">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <AiOutlineUserAdd size={18} />
              <p className="text-[12px] ml-1">
                <span className="text-blue-400 font-bold">Project Manager</span>{" "}
                dummy credentials
              </p>
            </div>
            <div className="rounded-full">
              <IoIosHelpCircle size={20} />
            </div>
          </div>
        </div>
        <div className="dummy-credentials mb-2 py-3 px-3 rounded-md border-[1.5px] border-gray-500 bg-gray-700 w-full opacity-70 hover:opacity-100 transition-all">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <AiOutlineUserAdd size={18} />
              <p className="text-[12px] ml-1">
                <span className="text-blue-400 font-bold">Team Member</span>{" "}
                dummy credentials
              </p>
            </div>
            <div className="rounded-full">
              <IoIosHelpCircle size={20} />
            </div>
          </div>
        </div>
        <Form
          form={form}
          name="signin"
          onFinish={onFinish}
          style={{
            width: "100%",
          }}
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
            <Input />
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
          <div className="submission-section flex flex-col mt-5">
            <p className="text-xs text-center mb-3 opacity-60">
              By logging in you are agreeing to the company user terms and
              conditions
            </p>
            <button
              className={
                !loading
                  ? "bg-secondry px-5 py-3 rounded-sm"
                  : "bg-secondry px-5 py-3 rounded-sm opacity-60"
              }
              type="submit"
              disabled={loading}
            >
              LOGIN
            </button>
          </div>
        </Form>
        {/* <form>
          <div className="input-container flex flex-col my-5">
            <label className="my-1">EMAIL</label>
            <input
              placeholder=""
              className={inputClassString}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-container flex flex-col my-5">
            <label className="my-1">PASSWORD</label>
            <input
              placeholder=""
              className={inputClassString}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
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
          <div className="submission-section flex flex-col mt-5">
            <p className="text-xs text-center mb-3 opacity-60">
              By logging in you are agreeing to the company user terms and
              conditions
            </p>
            <button
              className={
                !loading
                  ? "bg-secondry px-5 py-3 rounded-sm"
                  : "bg-secondry px-5 py-3 rounded-sm opacity-60"
              }
              type="submit"
              onClick={handleClick}
              disabled={loading}
            >
              LOGIN
            </button>
          </div>
        </form> */}
      </div>
    </div>
  );
}
