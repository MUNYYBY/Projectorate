import SearchModule from "../../../components/Search/SearchModule";
import TabDevider from "../../../components/Devider/Devider";
import { BsPeople } from "react-icons/bs";
import { IoIosAdd, IoIosHelpCircle } from "react-icons/io";
import { CgInbox } from "react-icons/cg";
import { Tooltip } from "antd";
import SuperAdminDashboard from ".";
import EmployeesContainer from "../../../components/Employees/EmployeesContainer";
export default function SuperAdminEmployees() {
  return (
    <SuperAdminDashboard>
      <div className="Employees-panel ml-[calc(5rem+18rem)]">
        <header className="flex flex-row items-center justify-between border-b-2 border-b-gray-900 px-4 py-4">
          <div className="flex flex-row items-center">
            <div className="project-panel-icon mr-3">
              <BsPeople size={30} />
            </div>
            <h1 className="text-lg font-bold">Employees Panel</h1>
          </div>
          <div className="flex flex-row items-center">
            <Tooltip
              placement="bottom"
              title="Add Employees for your projects workforce"
              mouseEnterDelay={0.05}
            >
              <button className="bg-secondry py-1 px-3 rounded-md flex flex-row justify-center items-center">
                <IoIosAdd size={26} />
                <p>Add Employees</p>
              </button>
            </Tooltip>
            <div className="help-icon px-2">
              <CgInbox size={28} />
            </div>
            <div className="inbox-icon px-2">
              <IoIosHelpCircle size={30} />
            </div>
          </div>
        </header>
        <div className="Search-employees-section px-4 my-4">
          <SearchModule
            title="SEARCH EMPLOYEES"
            description="Take a dive in to the employees and its attributes. Find anything you are looking for in this employees"
          />
        </div>
        <TabDevider color="bg-gray-900" width="w-full" opacity="opacity-1" />
        <div className="All-employees-stack mt-4 px-4">
          <div className="">
            <h1 className="font-semibold text-2xl opacity-80">ALL EMPLOYEES</h1>
            <p className="text-sm opacity-60 mt-1">
              A complete list of all the employees in Projectorate.
            </p>
          </div>
          <div className="Projects py-4 flex flex-col">
            <EmployeesContainer
              employeeName="Muneeb ur rehman"
              designation="Full-Stack Developer & UI/UX Designer"
              informationTag="Executive Senior Consultant"
            />
            <EmployeesContainer
              employeeName="Areeha Ahmed"
              designation="Front-end Developer"
              informationTag="Senior Developer"
            />
            <EmployeesContainer
              employeeName="Umer Nadeem"
              designation="Artificial Intelligence Expert"
              informationTag="Junior Developer"
            />
            <EmployeesContainer
              employeeName="Jahagir Ahmed"
              designation="SEO Expert"
              informationTag="Junior Consultant"
            />
          </div>
        </div>
      </div>
    </SuperAdminDashboard>
  );
}
