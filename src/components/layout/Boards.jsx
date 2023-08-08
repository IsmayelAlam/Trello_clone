import { useSelector } from "react-redux";
import { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import TaskList from "../tasks/TaskList";
import Button from "../utils/Buttons";
import AddNewTask from "../utils/AddNewTask";
import { useDispatch } from "react-redux";
import { dropCard } from "../../stores";
import { nanoid } from "@reduxjs/toolkit";

export default function Board() {
  const lists = useSelector((state) => state.list);

  const dispatch = useDispatch();

  const [expend, setExpend] = useState(false);

  const handleClick = () => setExpend(!expend);

  return (
    <DragDropContext onDragEnd={(task) => dispatch(dropCard(task))}>
      <div className="w-fit flex items-start mt-14">
        {lists.length < 1 || (
          <Droppable droppableId={nanoid()} type="list" direction="horizontal">
            {(provided) => {
              return (
                <ul
                  className="w-fit h-screen flex items-start ml-5"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {lists.map((list, index) => (
                    <TaskList key={list.id} list={list} index={index} />
                  ))}
                  {provided.placeholder}
                </ul>
              );
            }}
          </Droppable>
        )}
        {expend ? (
          <AddNewTask type="list" collapse={handleClick} />
        ) : (
          <Button type="list" onClick={handleClick} />
        )}
      </div>
    </DragDropContext>
  );
}
