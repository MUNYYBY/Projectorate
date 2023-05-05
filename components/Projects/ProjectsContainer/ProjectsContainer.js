import InformationTag from "../../InformationTag/InformationTag";

export default function ProjectsContainer({
  ProjectName = "Project Name",
  tagTitle = "Software Dev",
}) {
  return (
    <div className="h-44 w-full md:w-96 bg-gray-900 rounded-md shadow-sm p-6 flex flex-col justify-between">
      <div className="flex flex-row">
        <div className="Project-main-Image rounded-lg w-14 h-14 bg-gray-700 flex justify-center items-center">
          <h1 className="font-bold text-5xl">{ProjectName[0]}</h1>
        </div>
        <div className="projects-container-main-info ml-3">
          <h4 className="pb-1 text-xl font-semibold">{ProjectName}</h4>
          <div className="project-tags flex flex-row">
            <InformationTag title={tagTitle} type="intermediate" />
          </div>
        </div>
      </div>
      <div className="projects-attributes flex flex-row justify-between">
        <div className="flex flex-col items-center">
          <h1 className="text-secondry font-bold text-2xl">000</h1>
          <p className="text-sm opacity-80">Members</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-pOrange font-bold text-2xl">000</h1>
          <p className="text-sm opacity-80">Teams</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-intermediate font-bold text-2xl">000</h1>
          <p className="text-sm opacity-80">Tickets</p>
        </div>
      </div>
    </div>
  );
}
