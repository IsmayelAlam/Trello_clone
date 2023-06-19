import Button from "../utils/Buttons";
import TaskCard from "./TaskCard";
import TaskHeading from "../utils/TaskHeading";

export default function TaskList() {
  return (
    <div className="my-5 mx-2 bg-slate-950 rounded-lg shadow-md w-72 max-h-[90%] flex flex-col">
      <TaskHeading title="list" />

      <TaskCard num={Math.ceil(Math.random() * 20)} />

      <Button type="card" />
    </div>
  );
}
