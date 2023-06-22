import { useSelector } from "react-redux";
import { useState } from "react";

import TaskList from "../tasks/TaskList";
import Button from "../utils/Buttons";
import AddNewTask from "../utils/AddNewTask";

export default function Board() {
  const initData = useSelector((state) => state.list);

  const [expend, setExpend] = useState(false);

  // console.log(initData);

  const handleClick = () => setExpend(!expend);

  return (
    <div className="w-fit h-screen flex items-start overflow-x-scroll mt-14 ml-5">
      {initData.map((list) => (
        <TaskList key={list.id} list={list} />
      ))}

      {expend ? (
        <AddNewTask type="list" collapse={handleClick} />
      ) : (
        <Button type="list" onClick={handleClick} />
      )}
    </div>
  );
}
