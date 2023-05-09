import InformationTag from "../../InformationTag/InformationTag";

export default function ProjectsContainer({
  ProjectName = "Project Name",
  tagTitle = "Software Dev",
  employeesCount = "000",
  teamsCount = "000",
  ticketsCount = "000",
  type = "normal",
}) {
  return (
    <div
      className={`${
        type != "normal" ? "h-[6.5rem] w-full md:w-80" : "h-44 w-full md:w-96"
      } bg-gray-900 rounded-md shadow-sm p-6 flex flex-col justify-between`}
    >
      <div className="flex flex-row">
        <div className="Project-main-Image rounded-lg w-14 h-14 bg-gray-700 flex justify-center items-center">
          <h1 className="font-bold text-5xl">{ProjectName[0]}</h1>
        </div>
        <div className="projects-container-main-info ml-3 flex flex-col justify-center items-center">
          <h4 className="pb-1 text-xl font-semibold">{ProjectName}</h4>
          {type == "normal" ? (
            <div className="project-tags flex flex-row">
              <InformationTag title={tagTitle} type="intermediate" />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      {type == "normal" ? (
        <div className="projects-attributes flex flex-row justify-between">
          <div className="flex flex-col items-center">
            <h1 className="text-secondry font-bold text-2xl">
              {employeesCount == 0 ? "000" : employeesCount}
            </h1>
            <p className="text-sm opacity-80">Members</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-pOrange font-bold text-2xl">
              {teamsCount == 0 ? "000" : teamsCount}
            </h1>
            <p className="text-sm opacity-80">Teams</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-intermediate font-bold text-2xl">
              {ticketsCount == 0 ? "000" : ticketsCount}
            </h1>
            <p className="text-sm opacity-80">Tickets</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
