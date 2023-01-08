import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

const RouteContext = createContext({
  route: null,
  setRoute: () => {},
});
export const useRouteCheck = () => useContext(RouteContext);

export const RouteContextProvider = ({ children }) => {
  const [route, setRoute] = useState(null);
  const router = useRouter();

  useEffect(() => {
    setRoute(router.asPath);
  }, [router.asPath]);

  return (
    <RouteContext.Provider value={{ route, setRoute }}>
      {children}
    </RouteContext.Provider>
  );
};
