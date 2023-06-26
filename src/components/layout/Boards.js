import { useSelector } from "react-redux";
import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import TaskList from "../tasks/TaskList";
import Button from "../utils/Buttons";
import AddNewTask from "../utils/AddNewTask";
import { useDispatch } from "react-redux";
import { dropCard } from "../../stores";

export default function Board() {
  const boards = useSelector((state) => state.board);
  const lists = useSelector((state) => state.list);

  const [activeBoard] = boards.filter((board) => board.active);

  // let type;

  const dispatch = useDispatch();

  const [expend, setExpend] = useState(false);

  // console.log(lists);
  console.log(boards);

  const handleClick = () => setExpend(!expend);

  return (
    <DragDropContext onDragEnd={(task) => dispatch(dropCard(task))}>
      <div className="w-fit h-screen flex items-start mt-14">
        <ul className="w-fit h-screen flex items-start ml-5">
          {lists.map((list, index) => (
            <TaskList key={list.id} list={list} index={index} />
          ))}
        </ul>

        {expend ? (
          <AddNewTask type="list" collapse={handleClick} id={activeBoard.id} />
        ) : (
          <Button type="list" onClick={handleClick} />
        )}
      </div>{" "}
    </DragDropContext>
  );
}
