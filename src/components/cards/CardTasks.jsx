import { BsListTask, BsTrash } from "react-icons/bs";

export default function CardTasks({ card, id }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(card.taskList);
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
          name="task"
          id="task"
          placeholder="add new task"
          required
        />
        <button
          type="submit"
          className="py-px px-2 my-1 border rounded-lg outline-none"
        >
          add task
        </button>
      </form>
      <ul className="space-y-2">
        {card.taskList.map((task, index) => (
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
            <div>
              <BsTrash className="w-4 h-4 mx-2" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
