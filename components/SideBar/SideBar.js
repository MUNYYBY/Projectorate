import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineTeam, AiOutlineBlock, AiOutlineLogout } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosAdd, IoMdGitNetwork } from "react-icons/io";
import { FaRegUser, FaDragon } from "react-icons/fa";
import { HiOutlineViewBoards } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { Tooltip } from "antd";
import TabDevider from "../Devider/Devider";
import { useRouteCheck } from "../../context/routesContext";
import { Popover } from "antd";
import { signOut } from "next-auth/react";
import { useNotificationsHandler } from "../../context/notificationContext";

const NAV_URL = "/app/u/";

export default function SideBar() {
  const [settingsOpen, setSettingsOpen] = useState(false);

  //Global Notificatiosn handler
  const { notifications, setNotifications } = useNotificationsHandler();

  const LogoutSettingsPopOverOnClick = () => {
    setSettingsOpen(false);
    // if you want to redirect the page hard-coded set
    // redirect to true and set the callbackurl to something
    // e.g callbackUrl: "/auth"
    signOut({ redirect: true, callbackUrl: "/auth" });
    setNotifications({
      placement: "bottomRight",
      message: "You have been logged out!",
      description: "",
      type: "sucess",
    });
  };

  const handleSettingsOpenChange = (newOpen) => {
    setSettingsOpen(newOpen);
  };
  return (
    <nav className="fixed bg-gray-900 h-screen w-[4.5rem] flex flex-col items-center justify-between">
      <div className="primary-nav flex flex-col items-center">
        <Link href={NAV_URL}>
          <div className="Projectorate">
            <SideBarIcon
              icon={<FaDragon size={26} />}
              tooltip="Projectorate: A companies personal collaboration and software management platform 🔥"
              placement="leftBottom"
              type="logo"
            />
          </div>
        </Link>
        <TabDevider />
        <Link href={NAV_URL + "employees"}>
          <div className="Employees">
            <SideBarIcon
              icon={<AiOutlineTeam size={26} />}
              tooltip="Employees"
            />
          </div>
        </Link>
        <Link href={NAV_URL + "projects"}>
          <div className="Projects">
            <SideBarIcon
              icon={<IoMdGitNetwork size={26} />}
              tooltip="Projects"
            />
          </div>
        </Link>
        <Link href={NAV_URL + "teams"}>
          <div className="Teams">
            <SideBarIcon icon={<AiOutlineBlock size={26} />} tooltip="Teams" />
          </div>
        </Link>
        <Link href={NAV_URL + "board"}>
          <div className="Board">
            <SideBarIcon
              icon={<HiOutlineViewBoards size={26} />}
              tooltip="Board"
            />
          </div>
        </Link>
        <TabDevider />
        <div className="User Profile">
          <SideBarIcon icon={<FaRegUser size={24} />} tooltip="User Profile " />
        </div>
        <div className="Add New...">
          <SideBarIcon icon={<IoIosAdd size={32} />} tooltip="Add new..." />
        </div>
      </div>
      <div className="secondry-nav">
        <Popover
          content={
            <a
              onClick={LogoutSettingsPopOverOnClick}
              className="logout-popover-option flex flex-row items-center hover:text-secondry"
            >
              <div className="logout-icon mr-1">
                <AiOutlineLogout size={16} />
              </div>
              <p className="text-lg">Logout</p>
            </a>
          }
          title="Settings"
          trigger="click"
          placement="topRight"
          open={settingsOpen}
          onOpenChange={handleSettingsOpenChange}
        >
          <div className="Settings">
            <SideBarIcon icon={<FiSettings size={26} />} tooltip="Settings" />
          </div>
        </Popover>
      </div>
    </nav>
  );
}

const SideBarIcon = ({
  icon,
  tooltip = "tooltip 💡",
  placement = "left",
  type = "nav",
}) => {
  const { route } = useRouteCheck();
  return (
    <>
      {route?.includes(tooltip.toLowerCase()) ? (
        <div
          className="relative flex items-center justify-center 
        h-12 w-12 mt-2 mb-2 mx-auto  
      bg-green-600
      rounded-2xl text-white"
        >
          {icon}
        </div>
      ) : (
        <Tooltip placement={placement} title={tooltip} mouseEnterDelay={0.05}>
          {type == "nav" ? (
            <div className="sidebar-icon group">{icon}</div>
          ) : type == "logo" ? (
            <div className="sidebar-icon-logo group">{icon}</div>
          ) : (
            ""
          )}
        </Tooltip>
      )}
    </>
  );
};
