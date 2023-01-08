export default function TabDevider({
  width = "w-8",
  opacity = "opacity-20",
  color = "bg-gray-100",
}) {
  const classString =
    "Tab-Devider h-0.5 rounded-sm " + width + " " + opacity + " " + color;
  return <div className={classString}></div>;
}
