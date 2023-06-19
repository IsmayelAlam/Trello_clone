import Button from "../utils/Buttons";
import TaskCard from "../utils/TaskCard";
import TaskHeading from "../utils/TaskHeading";

export default function TaskList() {
  return (
    <div className="w-fit h-screen bg-slate- flex items-start overflow-x-scroll mt-14 ml-8">
      {[...Array(7).keys()].map((list) => (
        <div className="my-5 mx-2 bg-white rounded-lg shadow-md w-72 max-h-[90%] flex flex-col">
          <TaskHeading title={"list " + list} />

          <TaskCard num={Math.ceil(Math.random() * 20)} />

          <Button type="card" />
        </div>
      ))}

      <Button type="list" />
    </div>
  );
}
