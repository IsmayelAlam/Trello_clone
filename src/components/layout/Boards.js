import { useSelector } from "react-redux";
import { useState } from "react";

import TaskList from "../tasks/TaskList";
import Button from "../utils/Buttons";
import AddNewTask from "../utils/AddNewTask";

export default function Board() {
  const initData = useSelector((state) => state.board);

  const [expend, setExpend] = useState(false);

  const handleClick = () => setExpend(!expend);

  return (
    <div className="w-fit h-screen flex items-start overflow-x-scroll mt-14 ml-8">
      {initData.map((list) => (
        <TaskList key={list.id} list={list} />
      ))}

      {expend ? (
        <AddNewTask
          type="list"
          onClick={handleClick}
          onBlur={() => console.log("hi")}
        />
      ) : (
        <Button type="list" onClick={handleClick} />
      )}
    </div>
  );
}
