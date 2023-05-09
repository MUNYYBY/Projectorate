import { Drawer, Popconfirm, Tooltip, Skeleton, Select } from "antd";
import { message } from "antd";
import { useEffect, useState } from "react";
import React from "react";
import TabDevider from "../../Devider/Devider";
import { getTicketsStatus } from "../../../client/requests";

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

  function AssignEmployeeConfirm(employeeId) {}
  function OnAssignEmployeeCancel() {}

  //** Fetch all avaible employees */

  //   function handleTicketFetching() {
  //     if (props.isTicketInfo.id) {
  //       setLoading(true);
  //       GetTicketInfo(props.isTicketInfo.id).then((res) => {
  //         if (!res.error) {
  //           setTicketInfo(res.data.data);
  //           setLoading(false);
  //         } else {
  //           setLoading(false);
  //           message.error(
  //             "Some error occoured while fetching project employees!"
  //           );
  //         }
  //       });
  //       getTicketsStatus().then((res) => {
  //         if (!res.error) {
  //           setTicketStatus(res.data.data);
  //         } else {
  //           message.error(
  //             "Some error occoured while fetching project employees!"
  //           );
  //         }
  //       });
  //     }
  //   }
  //   useEffect(() => {
  //     handleTicketFetching();
  //   }, [props.isTicketInfo.id]);

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
          <div className="mt-56">
            <Skeleton active />
          </div>
        </>
      ) : (
        <></>
      )}
    </Drawer>
  );
}
