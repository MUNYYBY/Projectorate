import { Drawer, Popconfirm, Tooltip, Skeleton } from "antd";
import { message } from "antd";
import { useEffect, useState } from "react";
import React from "react";
import TabDevider from "../../Devider/Devider";
export default function TicketInfo(props) {
  const [loading, setLoading] = useState(true);
  function AssignEmployeeConfirm(employeeId) {}
  function OnAssignEmployeeCancel() {}

  //** Fetch all avaible employees */
  useEffect(() => {
    setLoading(true);
    // getProjectEmployees(props.projectId).then((res) => {
    //   if (!res.error) {
    //     setSearchResults(res.result);
    //     setLoading(false);
    //     console.log(res.result);
    //   } else {
    //     setLoading(false);
    //     message.error("Some error occoured while fetching project employees!");
    //   }
    // });
  }, []);
  return (
    <Drawer
      title="Ticket"
      onClose={() => props.setIsTicketInfo(false)}
      open={props.isTicketInfo}
      bodyStyle={{ paddingBottom: 80 }}
      width="55%"
    >
      {loading ? <Skeleton active /> : <></>}
    </Drawer>
  );
}
