import { useState } from "react";

import AddNewTask from "../utils/AddNewTask";
import Button from "../utils/Buttons";
import TaskCard from "./TaskCard";
import TaskHeading from "./TaskHeading";
import { Draggable } from "react-beautiful-dnd";

export default function TaskList({ list, index }) {
  const [expend, setExpend] = useState(false);

  const handleClick = () => setExpend(!expend);

  return (
    <Draggable key={list.id} draggableId={list.id} index={index}>
      {(provided) => {
        return (
          <li
            className="my-5 mx-2 bg-slate-950 rounded-lg shadow-md w-72 max-h-[90%] flex flex-col"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <TaskHeading list={list} collapse={handleClick} />

            {list.cards.length < 1 || (
              <TaskCard cards={list.cards} index={index} id={list.id} />
            )}

            {expend ? (
              <AddNewTask type="card" id={list.id} collapse={handleClick} />
            ) : (
              <Button type="card" onClick={handleClick} />
            )}
          </li>
        );
      }}
    </Draggable>
  );
}
