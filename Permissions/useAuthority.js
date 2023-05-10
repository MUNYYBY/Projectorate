import { useMemo } from "react";
import isEmpty from "lodash/isEmpty";
import { USER_PERMISSIONS } from "./Permissions";
import { useSession } from "next-auth/react";

function useAuthority(grantPermissionFor) {
  //** Get active user role */
  const { data: session, status } = useSession();

  const roleMatched = useMemo(() => {
    if (session) {
      if (session.user.role) {
        const ACTIVE_USER = USER_PERMISSIONS.find(
          (role) => role.user == session.user.role
        );
        return ACTIVE_USER.permissions[grantPermissionFor] || false;
      }
    }
  }, [grantPermissionFor, session]);

  if (status == "authenticated") {
    return roleMatched;
  } else {
    return false;
  }
}

export default useAuthority;
