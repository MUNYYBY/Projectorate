export default function InformationTag({
  title = "Mobile App",
  type = "primary",
  size = "xs",
}) {
  var classStringParent =
    "mr-1 px-2 py-1 w-fit rounded-full flex flex-col justify-center items-center ";
  var classStringChild = "font-light text-" + size + " ";

  if (type == "primary") {
    classStringParent += "bg-primary bg-opacity-20";
    classStringChild += "text-primary";
  } else if (type == "secondry") {
    classStringParent += "bg-secondry bg-opacity-20";
    classStringChild += "text-secondry";
  } else if (type == "intermediate") {
    classStringParent += "bg-intermediate bg-opacity-20";
    classStringChild += "text-intermediate";
  } else if (type == "pOrange") {
    classStringParent += "bg-pOrange bg-opacity-20";
    classStringChild += "text-pOrange";
  }
  return (
    <div className={classStringParent}>
      <p className={classStringChild}>{title}</p>
    </div>
  );
}
