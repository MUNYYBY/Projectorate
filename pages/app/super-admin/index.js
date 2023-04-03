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
export default function SuperAdminDashboard({ children, data }) {
  const { userData } = useUserDataHandler();
  return (
    <AppDashboard>
      <RouteContextProvider>
        <div
          className="Dashboard w-screen h-screen absolute z-10"
          style={{ backgroundColor: "#2c2e33" }}
        >
          <SideBar />
          <SubPanel />
          {!children ? (
            <div className="ml-[calc(4.5rem+16rem)]">
              <DashboardHeader />
              <div className="p-4">
                <SearchModule
                  title="SEARCH"
                  description="Take a dive in to the data and its attributes. Find anything you are looking for!"
                />
              </div>
              <TabDevider
                color="bg-gray-900"
                width="w-full"
                opacity="opacity-1"
              />
              <div className="flex flex-col m-6 mt-10">
                <div className="flex flex-col">
                  <h1 className="font-bold text-2xl">
                    Projectorate Statistics
                  </h1>
                  <p className="opacity-50">A brief analytics of the system</p>
                </div>
                <div className="stats shadow mt-8 bg-gray-900 rounded-lg h-40">
                  <div className="stat">
                    <div className="stat-figure text-pOrange">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block w-8 h-8 stroke-current"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <div className="stat-title">All Employees</div>
                    <div className="stat-value">{data.all_employees_count}</div>
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                        ></path>
                      </svg>
                    </div>
                    <div className="stat-title">Senior</div>
                    <div className="stat-value">
                      {data.senior_employees_count}
                    </div>
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                        ></path>
                      </svg>
                    </div>
                    <div className="stat-title">Associate</div>
                    <div className="stat-value">
                      {data.associate_employees_count}
                    </div>
                    <div className="stat-desc">March 1st - present</div>
                  </div>
                </div>
                {/* the second row for stats */}
                <div className="flex flex-row justify-between w-full mt-4 h-40">
                  <div className="stats bg-primary text-primary-content rounded-xl">
                    <div className="stat">
                      <div className="stat-title">Account balance</div>
                      <div className="stat-value">$89,400</div>
                      <div className="stat-actions">
                        <button className="btn btn-sm btn-success">
                          Add funds
                        </button>
                      </div>
                    </div>

                    <div className="stat">
                      <div className="stat-title">Current balance</div>
                      <div className="stat-value">$89,400</div>
                      <div className="stat-actions">
                        <button className="btn btn-sm">Withdrawal</button>
                      </div>
                    </div>
                  </div>
                  <div className="stats shadow bg-gray-900 ml-4 rounded-xl">
                    <div className="stat">
                      <div className="stat-title">Total Page Views</div>
                      <div className="stat-value">89,400</div>
                      <div className="stat-desc">21% more than last month</div>
                    </div>
                  </div>
                  <div className="stats shadow bg-gray-900 ml-4 rounded-xl">
                    <div className="stat">
                      <div className="stat-title">Total Page Views</div>
                      <div className="stat-value">89,400</div>
                      <div className="stat-desc">21% more than last month</div>
                    </div>
                  </div>
                  <div className="stats shadow bg-gray-900 ml-4 rounded-xl">
                    <div className="stat">
                      <div className="stat-title">Total Page Views</div>
                      <div className="stat-value">89,400</div>
                      <div className="stat-desc">21% more than last month</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {children}
        </div>
      </RouteContextProvider>
    </AppDashboard>
  );
}
// This gets called on every server-side render
export async function getServerSideProps() {
  // Fetch data from external API
  let data = null;
  try {
    const associateCountRes = await getAssociateEmployeesAnalytics();
    const seniorCountRes = await getSeniorEmployeesAnalytics();
    const internCountRes = await getInternEmployeesAnalytics();
    const allCountRes = await getAllEmployeesAnalytics();

    data = {
      all_employees_count: allCountRes.count,
      senior_employees_count: seniorCountRes.count,
      associate_employees_count: associateCountRes.count,
      intern_employees_count: internCountRes.count,
    };
  } catch (error) {
    console.log("Error at server-side for Super-admin index: ", error);
  }
  // Pass data to the page via props
  return {
    props: { data },
  };
}
