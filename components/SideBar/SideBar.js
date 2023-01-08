import { AiOutlineTeam, AiOutlineBlock } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosAdd, IoMdGitNetwork } from "react-icons/io";
import { FaRegUser, FaDragon } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { Tooltip } from "antd";
import TabDevider from "../Devider/Devider";

export default function SideBar() {
  return (
    <nav className="fixed bg-gray-900 h-screen w-20 flex flex-col items-center justify-between">
      <div className="primary-nav flex flex-col items-center">
        <div className="Projectorate">
          <SideBarIcon
            icon={<FaDragon size={28} />}
            tooltip="Projectorate: A companies personal collaboration and software management platform 🔥"
            placement="leftBottom"
            type="logo"
          />
        </div>
        <TabDevider />
        <div className="Employees">
          <SideBarIcon icon={<AiOutlineTeam size={28} />} tooltip="Employees" />
        </div>
        <div className="Projects">
          <SideBarIcon icon={<IoMdGitNetwork size={28} />} tooltip="Projects" />
        </div>
        <div className="Teams">
          <SideBarIcon icon={<AiOutlineBlock size={28} />} tooltip="Teams" />
        </div>
        <div className="Notifications">
          <SideBarIcon
            icon={<IoMdNotificationsOutline size={28} />}
            tooltip="Notifications"
          />
        </div>
        <TabDevider />
        <div className="User Profile">
          <SideBarIcon icon={<FaRegUser size={24} />} tooltip="User Profile " />
        </div>
        <div className="Add New...">
          <SideBarIcon icon={<IoIosAdd size={32} />} tooltip="Add new..." />
        </div>
      </div>
      <div className="secondry-nav">
        <div className="Settings">
          <SideBarIcon icon={<FiSettings size={28} />} tooltip="Settings" />
        </div>
      </div>
    </nav>
  );
}

const SideBarIcon = ({
  icon,
  tooltip = "tooltip 💡",
  placement = "left",
  type = "nav",
}) => (
  <Tooltip placement={placement} title={tooltip} mouseEnterDelay={0.05}>
    {type == "nav" ? (
      <div className="sidebar-icon group">{icon}</div>
    ) : type == "logo" ? (
      <div className="sidebar-icon-logo group">{icon}</div>
    ) : (
      ""
    )}
  </Tooltip>
);
