import { SlSocialSteam } from "react-icons/sl";
import { IoIosAdd, IoIosHelpCircle } from "react-icons/io";
import { CgInbox } from "react-icons/cg";
import { BiHomeAlt } from "react-icons/bi";
import { Tooltip } from "antd";

export default function DashboardHeader(
  {
    title = "Home",
    type = "home",
    icon = <BiHomeAlt size={30} />,
    setAddEmployees = "",
  },
  props
) {
  const handleSetEmployees = (e) => {
    e.preventDefault();
    props.setAddEmployees(true);
  };
  return (
    <div className="dashboard-header">
      <header className="flex flex-row items-center justify-between border-b-2 border-b-gray-900 px-4 py-2">
        <div className="flex flex-row items-center">
          <div className="dashboard-header-icon mr-3">{icon}</div>
          <h1 className="text-lg font-bold">{title}</h1>
        </div>
        <div className="flex flex-row items-center">
          {type == "project" ? (
            <Tooltip
              placement="bottom"
              title="Create a new project in your company and add a workforce"
              mouseEnterDelay={0.05}
            >
              <button className="bg-secondry py-1 px-3 rounded-md flex flex-row justify-center items-center">
                <IoIosAdd size={26} />
                <p>Create Project</p>
              </button>
            </Tooltip>
          ) : (
            ""
          )}
          {type == "employees" ? (
            <Tooltip
              placement="bottom"
              title="Add Employees for your projects workforce"
              mouseEnterDelay={0.05}
            >
              <button
                className="bg-secondry py-1 px-3 rounded-md flex flex-row justify-center items-center"
                onClick={() => setAddEmployees(true)}
              >
                <IoIosAdd size={26} />
                <p>Add Employees</p>
              </button>
            </Tooltip>
          ) : (
            ""
          )}
          <div className="help-icon px-2">
            <Tooltip placement="bottom" title="Help" mouseEnterDelay={0.05}>
              <CgInbox size={28} />
            </Tooltip>
          </div>
          <div className="inbox-icon px-2">
            <Tooltip placement="bottom" title="Inbox" mouseEnterDelay={0.05}>
              <IoIosHelpCircle size={30} />
            </Tooltip>
          </div>
        </div>
      </header>
    </div>
  );
}
