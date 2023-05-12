import { useState, useEffect } from "react";
import SideBar from "../../../components/SideBar/SideBar";
import SubPanel from "../../../components/Sub-panel/SubPanel";
import SearchModule from "../../../components/Search/SearchModule";
import { RouteContextProvider } from "../../../context/routesContext";
import DashboardHeader from "../../../components/DashboardHeader/DashboardHeader";
import TabDevider from "../../../components/Devider/Devider";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { useUserDataHandler } from "../../../context/userDataContext";
import AppDashboard from "..";
import axios from "axios";
import {
  getAllEmployeesAnalytics,
  getAssociateEmployeesAnalytics,
  getInternEmployeesAnalytics,
  getSeniorEmployeesAnalytics,
} from "../../../client/requests";
export default function SuperAdminDashboard() {
  //** states */
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { userData } = useUserDataHandler();

  //** Intitial fetching */

  async function handleFetching() {
    setLoading(true);
    const associateCountRes = await getAssociateEmployeesAnalytics();
    const seniorCountRes = await getSeniorEmployeesAnalytics();
    const internCountRes = await getInternEmployeesAnalytics();
    const allCountRes = await getAllEmployeesAnalytics();

    const d = {
      all_employees_count: allCountRes.count,
      senior_employees_count: seniorCountRes.count,
      associate_employees_count: associateCountRes.count,
      intern_employees_count: internCountRes.count,
    };
    setData(d);
    setLoading(false);
  }

  useEffect(() => {
    handleFetching();
  }, []);
  return (
    <RouteContextProvider>
      <div>
        <div>
          <DashboardHeader />
          <div className="p-4">
            <SearchModule
              title="SEARCH"
              description="Take a dive in to the data and its attributes. Find anything you are looking for!"
            />
          </div>
          <TabDevider color="bg-gray-900" width="w-full" opacity="opacity-1" />
          <div className="flex flex-col m-6 mt-10">
            <div className="flex flex-col">
              <h1 className="font-bold text-2xl">Projectorate Statistics</h1>
              <p className="opacity-50">A brief analytics of the system</p>
            </div>
            <div
              className={`stats shadow mt-8 bg-gray-900 rounded-lg h-40 ${
                loading ? "bg-opacity-10" : "bg-opacity-100"
              }`}
            >
              <div className="stat">
                <div className="stat-figure text-pOrange">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">All Employees</div>
                <div className="stat-value">{data?.all_employees_count}</div>
                <div className="stat-desc">March 1st - present</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-pOrange">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">Senior</div>
                <div className="stat-value">{data?.senior_employees_count}</div>
                <div className="stat-desc">March 1st - present</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-pOrange">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">Associate</div>
                <div className="stat-value">
                  {data?.associate_employees_count}
                </div>
                <div className="stat-desc">March 1st - present</div>
              </div>
            </div>
            {/* the second row for stats */}
            <div
              className={`stats shadow mt-8 bg-gray-900 rounded-lg h-40 ${
                loading ? "bg-opacity-10" : "bg-opacity-100"
              }`}
            >
              <div className="stat">
                <div className="stat-figure text-pOrange">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">All Employees</div>
                <div className="stat-value">{data?.all_employees_count}</div>
                <div className="stat-desc">March 1st - present</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-pOrange">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">Senior</div>
                <div className="stat-value">{data?.senior_employees_count}</div>
                <div className="stat-desc">March 1st - present</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-pOrange">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">Associate</div>
                <div className="stat-value">
                  {data?.associate_employees_count}
                </div>
                <div className="stat-desc">March 1st - present</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RouteContextProvider>
  );
}
