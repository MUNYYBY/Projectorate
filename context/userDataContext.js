import { createContext, useContext, useEffect, useState } from "react";
import { getEmployeeInfo } from "../client/requests";

const UserDataContext = createContext({
  userData: null,
  fetchUserInfo: () => {},
});
export const useUserDataHandler = () => useContext(UserDataContext);

export const UserDataContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  async function fetchUserInfo(id) {
    const res = await getEmployeeInfo(id).then((res) => {
      console.log("Employee Info:", res);
      setUserData(res);
      return res;
    });
  }

  return (
    <UserDataContext.Provider value={{ userData, fetchUserInfo }}>
      {children}
    </UserDataContext.Provider>
  );
};
