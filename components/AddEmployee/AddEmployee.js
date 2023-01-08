import { DatePicker } from "antd";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

export default function AddEmployee(props) {
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
            <div className="bg-gray-300 p-6 w-[28rem] rounded-md ">
              <div className="flex flex-col justify-center items-center mb-4">
                <h1 className="font-demo text-3xl text-gray-900">
                  Add Employee
                </h1>
                <p className="text-gray-900 text-center">
                  Add a new member your to your company to expand your company
                  portfolio...
                </p>
              </div>
              <form onSubmit={() => props.setAddEmployees(false)}>
                <div className="Input-stack">
                  <div className="employee_name py-1">
                    <input
                      placeholder="< Employee Name >"
                      type="text"
                      name="employee_name"
                      className="bg-gray-900 h-12 rounded-md w-full p-4 focus:outline-0 border-2 border-black"
                    />
                  </div>
                  <div className="employee_email py-1">
                    <input
                      placeholder="< Employee Email >"
                      type="email"
                      name="employee_email"
                      className="bg-gray-900 h-12 rounded-md w-full p-4 focus:outline-0 border-2 border-black"
                    />
                  </div>
                  <div className="phone_number py-1">
                    <input
                      placeholder="< Phone Number >"
                      type="phone"
                      name="phone_number"
                      className="bg-gray-900 h-12 rounded-md w-full p-4 focus:outline-0 border-2 border-black"
                    />
                  </div>

                  <div className="date_of_birth py-1">
                    <DatePicker
                      className="bg-gray-900 h-12 rounded-md w-full p-4 border-2 border-black"
                      style={{ color: "white !important" }}
                      placeholder="< Date of Birth >"
                    />
                  </div>
                  <div className="expertise py-1">
                    <input
                      placeholder="< Expertise >"
                      type="text"
                      name="expertise"
                      className="bg-gray-900 h-12 rounded-md w-full p-4 focus:outline-0 border-2 border-black"
                    />
                  </div>
                  <div className="designation py-1">
                    <input
                      placeholder="< Designation >"
                      type="text"
                      name="designation"
                      className="bg-gray-900 h-12 rounded-md w-full p-4 focus:outline-0 border-2 border-black"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center mt-6">
                    <p className="text-sm text-gray-900 text-center">
                      Before clicking Add employee please verify the details
                      that you have entered!
                    </p>
                    <button className="bg-primary px-4 py-3 rounded-lg mt-1">
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
