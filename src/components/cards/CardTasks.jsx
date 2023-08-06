import { useState } from "react";
import { BsListTask, BsTrash } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addCardTask, deleteCardTask } from "../../stores";

export default function CardTasks({ card, id }) {
  const [newTask, setNewTask] = useState("");
  // const [newTitle, setTitle] = useState(card.title);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCardTask({ id, newTask }));
    setNewTask("");
  };

  return (
    <div className="text-white space-y-4 mt-5">
      <form
        className="border-b-2 w-fit p-1 h-12 flex items-center justify-start"
        onSubmit={handleSubmit}
      >
        <label htmlFor="task">
          <BsListTask className="w-5 h-5" />
        </label>
        <input
          type="text"
          className="bg-transparent w-64 h-full px-1 outline-none mx-2"
          id="task"
          placeholder="add new task"
          required
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          type="submit"
          className="py-px px-2 my-1 border rounded-lg outline-none"
        >
          add task
        </button>
      </form>
      <ul className="space-y-2">
        {card.taskList &&
          card.taskList.map((task, index) => (
            <li
              key={index}
              className={`flex items-center justify-between text-lg min-w-[20rem] px-2 py-1 max-w-full w-96 ${
                task.marked && "line-through"
              }`}
            >
              <div className="space-x-2">
                <input
                  type="checkbox"
                  name={task.title}
                  id={index}
                  checked={task.marked}
                />
                <span>{task.title}</span>
              </div>
              <div onClick={() => dispatch(deleteCardTask({ id, index }))}>
                <BsTrash className="w-4 h-4 mx-2" />
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
