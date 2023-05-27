import { SlSocialSteam } from "react-icons/sl";
import { IoIosAdd, IoIosHelpCircle } from "react-icons/io";
import { CgInbox } from "react-icons/cg";
import { BiHomeAlt } from "react-icons/bi";
import { Tooltip } from "antd";
import useAuthority from "../../Permissions/useAuthority";
import AuthorityCheck from "../../Permissions/AuthorityCheck";

export default function DashboardHeader(
  {
    title = "Home",
    type = "home",
    icon = <BiHomeAlt size={30} />,
    setIsEmployeePanel = false,
  },
  props
) {
  return (
    <div className="dashboard-header">
      <header className="flex flex-row items-center justify-between border-b-2 border-b-gray-900 px-4 py-2">
        <div className="flex flex-row items-center">
          <div className="dashboard-header-icon mr-3">{icon}</div>
          <h1 className="text-lg font-bol hidden sm:flex">{title}</h1>
        </div>
        <div className="flex flex-row items-center">
          {type == "project" ? (
            <AuthorityCheck grantPermissionFor="manage_projects">
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
            </AuthorityCheck>
          ) : (
            ""
          )}
          {type == "employees" ? (
            <AuthorityCheck grantPermissionFor="manage_employees">
              <Tooltip
                placement="bottom"
                title="A panel in which admin can manage all of their employees"
                mouseEnterDelay={0.05}
              >
                <button
                  className="bg-secondry py-1 px-3 rounded-md flex flex-row justify-center items-center"
                  onClick={() => setIsEmployeePanel(true)}
                >
                  <IoIosAdd size={26} />
                  <p>Employees Management</p>
                </button>
              </Tooltip>
            </AuthorityCheck>
          ) : (
            ""
          )}
          {/* <div className="help-icon px-2 sm:flex hidden">
            <Tooltip placement="bottom" title="Help" mouseEnterDelay={0.05}>
              <CgInbox size={28} />
            </Tooltip>
          </div>
          <div className="help-icon px-2 sm:flex hidden">
            <Tooltip placement="bottom" title="Inbox" mouseEnterDelay={0.05}>
              <IoIosHelpCircle size={30} />
            </Tooltip>
          </div> */}
        </div>
      </header>
    </div>
  );
}
