import React from "react";
import useAuthority from "./useAuthority";

const AuthorityCheck = (props) => {
  const { grantPermissionFor, children } = props;

  const roleMatched = useAuthority(grantPermissionFor);

  //   console.log("AuthorityCheck:", grantPermissionFor, roleMatched);
  return roleMatched ? children : <></>;
};

export default AuthorityCheck;
