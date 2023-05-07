import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function ProjectsTabContainer({
  CompanyName = "Company Name",
  projectId,
}) {
  //** Router Initialization */
  const router = useRouter();
  const [color, setColor] = useState("bg-gray-700");

  useEffect(() => {
    if (router.query.projectId && router.query.projectName) {
      if (
        projectId == router.query.projectId &&
        router.query.projectName == CompanyName
      ) {
        setColor("bg-gray-900");
      } else {
        setColor("bg-gray-700");
      }
    }
  }, [router.query]);
  return (
    <div
      className={`w-full h-16 ${color} px-4 mt-2 flex flex-col justify-center cursor-pointer`}
    >
      <div className="flex flex-row items-center">
        <div className="Project-Image h-12 w-12 flex justify-center items-center bg-gray-500 bg-opacity-25 rounded-lg">
          <h1 className="text-3xl font-semibold">{CompanyName[0]}</h1>
        </div>
        <div className="projects-container-info ml-3">
          <h4 className="">{CompanyName}</h4>
        </div>
      </div>
    </div>
  );
}
