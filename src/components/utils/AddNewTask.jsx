import { useState } from "react";
import { GoX } from "react-icons/go";
import { useDispatch } from "react-redux";
import { addCard, addList } from "../../stores";

export default function AddNewTask({ type, id, collapse, classes }) {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => setTitle(e.target.value);

  let action;

  switch (type) {
    case "card":
      action = addCard({ id, title });
      break;
    case "list":
      action = addList({ title });
      break;
    default:
      return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(action);
    collapse();
  };

  return (
    <form
      className={`flex flex-col gap-2 px-2 py-2 my-5 mx-2 bg-slate-300 rounded font-semibold text-gray-800 capitalize ${
        type === "card" ? "" : "w-72"
      } ${classes}`}
      onSubmit={handleSubmit}
    >
      <label>Title</label>

      <textarea
        type="text"
        required
        placeholder="Add title..."
        className="rounded resize-none scrollbar p-2 h-20"
        autoFocus
        value={title}
        onChange={handleChange}
        onBlur={title.length < 1 ? collapse : handleSubmit}
      />

      <div className="flex gap-2 items-center">
        <button
          className="px-5 py-1 text-white rounded shadow bg-blue-500"
          type="submit"
        >
          Add list
        </button>
        <button onClick={collapse}>
          <GoX className="w-5 h-5 text-black" />
        </button>
      </div>
    </form>
  );
}
