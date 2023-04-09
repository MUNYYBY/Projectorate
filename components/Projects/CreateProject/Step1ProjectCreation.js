import React from "react";
import { Cascader, Steps, Form, Input, InputNumber, message } from "antd";
import { useState, useEffect } from "react";

export default function Step1ProjectCreation(props) {
  const [form] = Form.useForm();
  function onFinish(values) {
    props.setProjectName(values.project_name);
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
        <button
          className="bg-primary h-12 p-2 rounded-md flex flex-row justify-center items-center w-full text-lg font-semibold mt-4 disabled:opacity-50"
          disabled={props.loading}
        >
          <p>Next</p>
        </button>
      </Form>
    </div>
  );
}
