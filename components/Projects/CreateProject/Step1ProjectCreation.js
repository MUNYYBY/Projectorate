import React from "react";
import { Cascader, Steps, Form, Input, InputNumber, message } from "antd";
import { useState, useEffect } from "react";

export default function Step1ProjectCreation(props) {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  function onFinish(values) {
    console.log(values);
    props.setProjectName(values);
    props.setCreationPhase(1);
  }
  return (
    <div className="w-full">
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
          label="Project Name"
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
          <Input placeholder="Enter a project name" value={props.projectName} />
        </Form.Item>
        <button className="bg-primary p-2 rounded-md flex flex-row justify-center items-center w-full text-lg font-semibold mt-4">
          <p>Next</p>
        </button>
      </Form>
    </div>
  );
}
