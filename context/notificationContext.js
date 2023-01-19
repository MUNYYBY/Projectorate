import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { message, notification } from "antd";

const NotificationsContext = createContext({
  notifications: null,
  setNotifications: () => {},
});
export const useNotificationsHandler = () => useContext(NotificationsContext);

export const NotificationsContextProvider = ({ children }) => {
  const [notifications, setNotifications] = useState(null);

  const [api, contextHolder] = notification.useNotification(null);

  //   let openNotification;
  const openNotification = (placement, message, description, type) => {
    if (type == "info") {
      api.info({
        message: message,
        description: description,
        placement,
      });
    } else if (type == "sucess") {
      api.success({
        message: message,
        description: description,
        placement,
      });
    } else if (type == "warning") {
      api.warning({
        message: message,
        description: description,
        placement,
      });
    } else if (type == "error") {
      api.error({
        message: message,
        description: description,
        placement,
      });
    }
  };

  useEffect(() => {
    console.log("notification:", notifications);
    if (notifications) {
      openNotification(
        notifications.placement,
        notifications.message,
        notifications.description,
        notifications.type
      );
      setNotifications(null);
    }
  }, [notifications]);

  return (
    <NotificationsContext.Provider value={{ notifications, setNotifications }}>
      <div className="Notifications">{contextHolder}</div>
      {children}
    </NotificationsContext.Provider>
  );
};
