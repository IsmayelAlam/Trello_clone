import { useState } from "react";
import { BsListTask } from "react-icons/bs";
import { useDispatch } from "react-redux";

import { addCardTask } from "../../stores";
import CardTaskList from "./CardTaskList";

export default function CardTasks({ tasks = {}, id }) {
  const [newTask, setNewTask] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCardTask({ id, newTask }));
    setNewTask("");
  };

  return (
    <div className="text-white space-y-4 mt-10">
      <form
        className="border-b-2 w-full p-1 h-12 flex items-center justify-start"
        onSubmit={handleSubmit}
      >
        <label htmlFor="task">
          <BsListTask className="w-5 h-5" />
        </label>
        <input
          type="text"
          className="bg-transparent h-full px-1 outline-none mx-2 grow"
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
        {tasks.map((task, index) => (
          <CardTaskList task={task} index={index} key={index} id={id} />
        ))}
      </ul>
    </div>
  );
}
