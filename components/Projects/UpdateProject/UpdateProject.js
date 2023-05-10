import React from "react";
import {
  Cascader,
  Steps,
  Form,
  Input,
  InputNumber,
  message,
  Select,
} from "antd";
import { useState, useEffect } from "react";
import { UpdateProjectAPI, getProjectDomains } from "../../../client/requests";
export default function UpdateProject({
  projectInformation,
  setIsUpdateProject,
}) {
  const [loading, setLoading] = useState(false);
  const [projectDomains, setProjectDomains] = useState([]);
  const [form] = Form.useForm();
  function onFinish(values) {
    setLoading(true);
    const payload = {
      ...values,
      id: projectInformation.id,
    };
    UpdateProjectAPI(payload).then((res) => {
      if (res.data) {
        message.success("Project updated Sucessfully!");
        setIsUpdateProject(false);
        setLoading(false);
      } else {
        message.error("Project update Failed!");
        setLoading(false);
      }
    });
  }

  //get all the project domains on component mount
  useEffect(() => {
    setLoading(true);
    getProjectDomains().then((res) => {
      console.log("Project Domains: ", res.data);
      setProjectDomains(res.data);
      setLoading(false);
    });
  }, []);
  return (
    <div className="md:ml-4">
      <Form
        form={form}
        layout="vertical"
        name="create project - part 1"
        onFinish={onFinish}
        style={{
          width: "100%",
        }}
        scrollToFirstError
        disabled={loading}
      >
        <Form.Item
          name="project_name"
          rules={[
            {
              required: true,
              message: "Please enter valid project name",
            },
            {
              min: 5,
              message: "Project name must be atleast 5 characters long!",
            },
            {
              whitespace: true,
              message:
                "Project name must be atleast 1 non-whitespace character!",
            },
          ]}
        >
          <Input
            placeholder="Enter a project name"
            defaultValue={projectInformation.project_name}
          />
        </Form.Item>
        <Form.Item
          name="project_domain_id"
          rules={[
            {
              required: true,
              message: "Please select a Project Domain!",
            },
          ]}
        >
          <Select placeholder="Select your a domain for the project">
            {projectDomains.map((item) => {
              return (
                <Select.Option key={item.id} value={item.id}>
                  {item.title}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item
          name="description"
          rules={[
            {
              required: true,
              message: "Please enter valid project description",
            },
            {
              min: 5,
              message: "Project description must be atleast 5 characters long!",
            },
            {
              whitespace: true,
              message:
                "Project description must be atleast 1 non-whitespace character!",
            },
          ]}
        >
          <Input
            placeholder="Enter a project description"
            defaultValue={projectInformation.description}
          />
        </Form.Item>
        <div className="flex">
          <button
            className="bg-white bg-opacity-10 hover:bg-opacity-20 transition-all w-24 h-10 p-2 mr-2 rounded-md flex flex-row justify-center items-center text-lg font-semibold mt-4 disabled:opacity-50"
            onClick={() => setIsUpdateProject(false)}
          >
            <p>Cancel</p>
          </button>
          <button
            className="bg-primary w-24 h-10 p-2 rounded-md flex flex-row justify-center items-center text-lg font-semibold mt-4 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? (
              <svg
                class="animate-spin -ml-1 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              <p>Update</p>
            )}
          </button>
        </div>
      </Form>
    </div>
  );
}
