import { useSelector } from "react-redux";
import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import TaskList from "../tasks/TaskList";
import Button from "../utils/Buttons";
import AddNewTask from "../utils/AddNewTask";

export default function Board() {
  const initData = useSelector((state) => state.list);

  const [expend, setExpend] = useState(false);

  // console.log(board);

  const handleClick = () => setExpend(!expend);

  return (
    <DragDropContext onDragStart={() => console.log("hi")}>
      <div className="w-fit h-screen flex items-start mt-14">
        <ul className="w-fit h-screen flex items-start ml-5">
          {initData.map((list, index) => (
            <TaskList key={list.id} list={list} index={index} />
          ))}
        </ul>

        {expend ? (
          <AddNewTask type="list" collapse={handleClick} />
        ) : (
          <Button type="list" onClick={handleClick} />
        )}
      </div>{" "}
    </DragDropContext>
  );
}
