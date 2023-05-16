import { useState, useEffect } from "react";
import DashboardHeader from "../../../components/DashboardHeader/DashboardHeader";
import { useUserDataHandler } from "../../../context/userDataContext";
import {
  GetAnalytics,
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
    const analytics = await GetAnalytics();

    const d = {
      all_employees_count: allCountRes.count,
      senior_employees_count: seniorCountRes.count,
      associate_employees_count: associateCountRes.count,
      intern_employees_count: internCountRes.count,
      teams: analytics.teams,
      projects: analytics.projects,
      tickets: analytics.tickets,
    };
    setData(d);
    setLoading(false);
  }

  useEffect(() => {
    handleFetching();
  }, []);
  return (
    <div>
      <div>
        <DashboardHeader />
        <div className="flex flex-col m-6 mt-10 ">
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl">Projectorate Statistics</h1>
            <p className="opacity-50">A brief analytics of the system</p>
          </div>
          <div
            className={`stats text-white shadow mt-8 bg-gray-900 rounded-lg h-40`}
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
            className={`stats text-white shadow mt-8 bg-gray-900 rounded-lg h-40 `}
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
              <div className="stat-title">Projects</div>
              <div className="stat-value">{data?.projects}</div>
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
              <div className="stat-title">Teams</div>
              <div className="stat-value">{data?.teams}</div>
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
              <div className="stat-title">Tickets</div>
              <div className="stat-value">{data?.tickets}</div>
              <div className="stat-desc">March 1st - present</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
