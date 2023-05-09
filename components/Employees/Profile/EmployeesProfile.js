import { Drawer, Popconfirm, Tooltip, Skeleton, Select } from "antd";
import { message } from "antd";
import { useEffect, useState } from "react";
import React from "react";
import TabDevider from "../../Devider/Devider";
import { getEmployeeProfile, getTicketsStatus } from "../../../client/requests";
import { FaRegUser } from "react-icons/fa";

export default function EmployeeProfile(props) {
  const [loading, setLoading] = useState(true);
  const [EmployeeInfo, setEmployeeInfo] = useState(null);

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  //** Fetch all avaible employees */

  function handleEmployeeFetching() {
    if (props.isEmployeeProfile.id) {
      setLoading(true);
      getEmployeeProfile(props.isEmployeeProfile.id).then((res) => {
        if (!res.error) {
          setEmployeeInfo(res.data);
          setLoading(false);
        } else {
          setLoading(false);
          message.error(
            "Some error occoured while fetching project employees!"
          );
        }
      });
    }
  }
  useEffect(() => {
    handleEmployeeFetching();
  }, [props.isEmployeeProfile.id]);

  return (
    <Drawer
      title="Employee Profile"
      onClose={() => props.setIsEmployeeProfile({ id: null })}
      open={props.isEmployeeProfile.id}
      bodyStyle={{ paddingBottom: 80 }}
      width={windowSize[0] > 1100 ? "70%" : "100%"}
    >
      {loading || !EmployeeInfo ? (
        <>
          <Skeleton active />
          <div className="mt-4">
            <Skeleton active />
          </div>
          <div className="mt-4">
            <Skeleton active />
          </div>
          <div className="mt-4">
            <Skeleton active />
          </div>
          <div className="mt-4">
            <Skeleton active />
          </div>
        </>
      ) : (
        <>
          <header className="flex flex-row justify-between items-center">
            <div className="flex flex-row justify-center items-start">
              <div className="h-44 w-44 bg-gray-300 bg-opacity-10 flex justify-center items-center rounded-3xl">
                <h1 className="text-[8rem] font-bold opacity-60">
                  {EmployeeInfo.first_name[0]}
                </h1>
              </div>
              <div className="flex flex-col pl-4">
                <div className="flex justify-center items-center mb-4">
                  <FaRegUser size={28} />
                  <h1 className="text-4xl font-bold ml-2">
                    {EmployeeInfo.first_name} {EmployeeInfo.last_name}
                  </h1>
                </div>
                <div className="flex justify-center items-center"></div>
              </div>
            </div>
            <div>
              <div>{EmployeeInfo.first_name}</div>
            </div>
          </header>
        </>
      )}
    </Drawer>
  );
}
