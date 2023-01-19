import { DatePicker } from "antd";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import { Col, Row } from "antd";
import { useState, useEffect } from "react";
import { createEmployee, getEmployees } from "../../client/requests";
import { useNotificationsHandler } from "../../context/notificationContext";

export default function AddEmployee(props) {
  const [employeePayload, setEmployeePayload] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    dateOfBirth: "",
    expertise: "",
    designation: "",
    dateOfJoining: "",
    yearsOfExperience: "",
  });

  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  const { notifications, setNotifications } = useNotificationsHandler();

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

  // useEffect(() => {
  //   console.log(employeePayload);
  // }, [employeePayload]);
  return (
    <div className="Add-Employees w-screen h-screen absolute top-0 z-50">
      <div className="w-full h-full flex flex-col justify-center items-center absolute top-0 z-20">
        <AnimatePresence>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div className="bg-gray-300 p-6 m-2 min-w-[20rem] max-w-[50rem] rounded-md ">
              <div className="flex flex-col justify-center items-center mb-4">
                <h1 className="font-demo text-3xl text-gray-900">
                  Add Employee
                </h1>
                <p className="text-gray-900 text-center">
                  Add a new member your to your company to expand your company
                  portfolio...
                </p>
              </div>
              <form onSubmit={handleEmployeeSubmission}>
                <div className="Input-stack w-full">
                  <Row gutter={[8, 8]}>
                    <Col xs={24} lg={12}>
                      <div className="employee_first_name">
                        <input
                          placeholder="< Employee First Name >"
                          type="text"
                          name="employee_first_name"
                          className="bg-gray-900 h-12 rounded-md w-full p-4 focus:outline-0 border-2 border-black"
                          onChange={(e) =>
                            setEmployeePayload({
                              ...employeePayload,
                              firstName: e.target.value,
                            })
                          }
                        />
                      </div>
                    </Col>
                    <Col xs={24} lg={12}>
                      <div className="employee_last_name">
                        <input
                          placeholder="< Employee Last Name >"
                          type="text"
                          name="employee_last_name"
                          className="bg-gray-900 h-12 rounded-md w-full p-4 focus:outline-0 border-2 border-black"
                          onChange={(e) =>
                            setEmployeePayload({
                              ...employeePayload,
                              lastName: e.target.value,
                            })
                          }
                        />
                      </div>
                    </Col>
                    <Col xs={24} lg={12}>
                      <div className="employee_email">
                        <input
                          placeholder="< Employee Email >"
                          type="email"
                          name="employee_email"
                          className="bg-gray-900 h-12 rounded-md w-full p-4 focus:outline-0 border-2 border-black"
                          onChange={(e) =>
                            setEmployeePayload({
                              ...employeePayload,
                              email: e.target.value,
                            })
                          }
                        />
                      </div>
                    </Col>
                    <Col xs={24} lg={12}>
                      <div className="employee_password">
                        <input
                          placeholder="< Employee Password >"
                          type="password"
                          name="employee_password"
                          className="bg-gray-900 h-12 rounded-md w-full p-4 focus:outline-0 border-2 border-black"
                          onChange={(e) =>
                            setEmployeePayload({
                              ...employeePayload,
                              password: e.target.value,
                            })
                          }
                        />
                      </div>
                    </Col>
                    <Col xs={24} lg={12}>
                      <div className="phone_number ">
                        <input
                          placeholder="< Phone Number >"
                          type="text"
                          name="phone_number"
                          className="bg-gray-900 h-12 rounded-md w-full p-4 focus:outline-0 border-2 border-black"
                          onChange={(e) =>
                            setEmployeePayload({
                              ...employeePayload,
                              phoneNumber: e.target.value,
                            })
                          }
                        />
                      </div>
                    </Col>
                    <Col xs={24} lg={12}>
                      <div className="date_of_birth">
                        <DatePicker
                          className="text-gray-50 bg-gray-900 h-12 rounded-md w-full p-4 border-2 border-black"
                          placeholder="< Date of Birth >"
                          onChange={(date) =>
                            setEmployeePayload({
                              ...employeePayload,
                              dateOfBirth: date.$d,
                            })
                          }
                        />
                      </div>
                    </Col>
                    <Col xs={24} lg={12}>
                      <div className="expertise">
                        <input
                          placeholder="< Expertise >"
                          type="text"
                          name="expertise"
                          className="bg-gray-900 h-12 rounded-md w-full p-4 focus:outline-0 border-2 border-black"
                          onChange={(e) =>
                            setEmployeePayload({
                              ...employeePayload,
                              expertise: e.target.value,
                            })
                          }
                        />
                      </div>
                    </Col>
                    <Col xs={24} lg={12}>
                      <div className="designation">
                        <input
                          placeholder="< Designation >"
                          type="text"
                          name="designation"
                          className="bg-gray-900 h-12 rounded-md w-full p-4 focus:outline-0 border-2 border-black"
                          onChange={(e) =>
                            setEmployeePayload({
                              ...employeePayload,
                              designation: e.target.value,
                            })
                          }
                        />
                      </div>
                    </Col>
                    <Col xs={24} lg={12}>
                      <div className="date_of_joining">
                        <DatePicker
                          className="text-gray-50 bg-gray-900 h-12 rounded-md w-full p-4 border-2 border-black"
                          placeholder="< Date of Joining >"
                          onChange={(date) =>
                            setEmployeePayload({
                              ...employeePayload,
                              dateOfJoining: date.$d,
                            })
                          }
                        />
                      </div>
                    </Col>
                    <Col xs={24} lg={12}>
                      <div className="years_of_experience">
                        <input
                          placeholder="< Years of Experience >"
                          type="number"
                          name="years_of_experience"
                          className="bg-gray-900 h-12 rounded-md w-full p-4 focus:outline-0 border-2 border-black"
                          onChange={(e) =>
                            setEmployeePayload({
                              ...employeePayload,
                              yearsOfExperience: e.target.value,
                            })
                          }
                        />
                      </div>
                    </Col>
                    <Col xs={24} lg={12}>
                      <div className="upload-image">
                        <Upload accept="image/png, image/jpeg">
                          <Button
                            icon={<UploadOutlined />}
                            className="bg-gray-700 h-10 text-gray-50 d-flex flex-row justify-items-center items-center"
                          >
                            Upload
                          </Button>
                        </Upload>
                      </div>
                    </Col>
                  </Row>
                  <div className="flex flex-col justify-center items-center mt-6">
                    <p className="text-sm text-gray-900 text-center">
                      Before clicking Add employee please verify the details
                      that you have entered!
                    </p>
                    <button
                      className={
                        !isSubmitClicked
                          ? "bg-primary px-4 py-3 rounded-lg mt-1"
                          : "bg-primary px-4 py-3 rounded-lg mt-1 opacity-60"
                      }
                      disabled={isSubmitClicked}
                    >
                      ADD EMPLOYEE
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          exit={{ opacity: 0 }}
        >
          <div className="w-screen h-screen absolute top-0 bg-gray-900 opacity-80 z-10"></div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
