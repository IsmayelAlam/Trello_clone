import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCardTask, updateCardTask } from "../../stores";
import { BsTrash } from "react-icons/bs";

export default function CardTaskList({ task, index, id }) {
  const [showDlt, setShowDlt] = useState(false);
  const dispatch = useDispatch();

  return (
    <li
      className={`flex items-center justify-between text-lg min-w-[20rem] px-2 py-1 w-full hover:bg-slate-700 rounded-lg ${
        task.marked && "line-through"
      }`}
      onMouseEnter={() => setShowDlt((d) => !d)}
      onMouseLeave={() => setShowDlt((d) => !d)}
    >
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name={task.title}
          id={index}
          checked={task.marked}
          onChange={() => dispatch(updateCardTask({ id, index }))}
          className="w-4 h-4"
        />
        <label htmlFor={index}>{task.title}</label>
      </div>
      <div
        onClick={() => dispatch(deleteCardTask({ id, index }))}
        className="w-5 h-5 cursor-pointer"
      >
        {showDlt && <BsTrash className="w-4 h-4" />}
      </div>
    </li>
  );
}
