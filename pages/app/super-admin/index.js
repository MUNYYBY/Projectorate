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
export default function SuperAdminDashboard({ children }) {
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
                  <h1 className="font-bold text-xl">Projectorate Statistics</h1>
                  <p className="opacity-50">A brief analytics of the system</p>
                </div>
                <div class="stats shadow mt-8 bg-gray-900 rounded-lg h-40">
                  <div class="stat">
                    <div class="stat-figure text-pOrange">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        class="inline-block w-8 h-8 stroke-current"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <div class="stat-title">Downloads</div>
                    <div class="stat-value">31K</div>
                    <div class="stat-desc">Jan 1st - Feb 1st</div>
                  </div>

                  <div class="stat">
                    <div class="stat-figure text-pOrange">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        class="inline-block w-8 h-8 stroke-current"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                        ></path>
                      </svg>
                    </div>
                    <div class="stat-title">New Users</div>
                    <div class="stat-value">4,200</div>
                    <div class="stat-desc">↗︎ 400 (22%)</div>
                  </div>

                  <div class="stat">
                    <div class="stat-figure text-pOrange">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        class="inline-block w-8 h-8 stroke-current"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                        ></path>
                      </svg>
                    </div>
                    <div class="stat-title">New Registers</div>
                    <div class="stat-value">1,200</div>
                    <div class="stat-desc">↘︎ 90 (14%)</div>
                  </div>
                </div>
                {/* the second row for stats */}
                <div className="flex flex-row w-full mt-4 h-40">
                  <div class="stats bg-primary text-primary-content rounded-xl">
                    <div class="stat">
                      <div class="stat-title">Account balance</div>
                      <div class="stat-value">$89,400</div>
                      <div class="stat-actions">
                        <button class="btn btn-sm btn-success">
                          Add funds
                        </button>
                      </div>
                    </div>

                    <div class="stat">
                      <div class="stat-title">Current balance</div>
                      <div class="stat-value">$89,400</div>
                      <div class="stat-actions">
                        <button class="btn btn-sm">Withdrawal</button>
                      </div>
                    </div>
                  </div>
                  <div class="stats shadow bg-gray-900 ml-4 rounded-xl">
                    <div class="stat">
                      <div class="stat-title">Total Page Views</div>
                      <div class="stat-value">89,400</div>
                      <div class="stat-desc">21% more than last month</div>
                    </div>
                  </div>
                  <div class="stats shadow bg-gray-900 ml-4 rounded-xl">
                    <div class="stat">
                      <div class="stat-title">Total Page Views</div>
                      <div class="stat-value">89,400</div>
                      <div class="stat-desc">21% more than last month</div>
                    </div>
                  </div>
                  <div class="stats shadow bg-gray-900 ml-4 rounded-xl">
                    <div class="stat">
                      <div class="stat-title">Total Page Views</div>
                      <div class="stat-value">89,400</div>
                      <div class="stat-desc">21% more than last month</div>
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
