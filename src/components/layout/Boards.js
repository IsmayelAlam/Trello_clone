import TaskList from "../tasks/TaskList";
import Button from "../utils/Buttons";

export default function Board() {
  return (
    <div className="w-fit h-screen flex items-start overflow-x-scroll mt-14 ml-8">
      {[...Array(7).keys()].map(() => (
        <TaskList />
      ))}
      <Button type="list" />
    </div>
  );
}
