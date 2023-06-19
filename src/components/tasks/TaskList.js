import { useState } from "react";

import AddNewTask from "../utils/AddNewTask";
import Button from "../utils/Buttons";
import TaskCard from "./TaskCard";
import TaskHeading from "../utils/TaskHeading";

export default function TaskList({ list }) {
  const [expend, setExpend] = useState(false);

  const handleClick = () => setExpend(!expend);

  return (
    <div className="my-5 mx-2 bg-slate-950 rounded-lg shadow-md w-72 max-h-[90%] flex flex-col">
      <TaskHeading title={list.title} />

      <TaskCard cards={list.cards} />

      {expend ? (
        <AddNewTask type="card" id={list.id} collapse={handleClick} />
      ) : (
        <Button type="card" onClick={handleClick} />
      )}
    </div>
  );
}
