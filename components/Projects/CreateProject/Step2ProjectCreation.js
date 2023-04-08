import React from "react";
import { Cascader, Steps, Form, Input, InputNumber, message } from "antd";
import { useState, useEffect } from "react";

export default function Step2ProjectCreation(props) {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  function onFinish(values) {
    props.setProjectDetails(values.project_description);
    props.setCreationPhase(2);
  }
  return (
    <div className="w-full">
      <Form
        form={form}
        layout="vertical"
        name="create project - part 2"
        onFinish={onFinish}
        style={{
          width: "100%",
        }}
        scrollToFirstError
        disabled={loading}
      >
        <Form.Item
          name="project_description"
          label="Project Description"
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
          <Input placeholder="Enter a project description" />
        </Form.Item>
        <button className="bg-primary p-2 rounded-md flex flex-row justify-center items-center w-full text-lg font-semibold mt-4">
          <p>Create Project</p>
        </button>
      </Form>
    </div>
  );
}
