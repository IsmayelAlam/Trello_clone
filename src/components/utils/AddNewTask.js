import { useState } from "react";
import { GoX } from "react-icons/go";
import { useDispatch } from "react-redux";
import { addCard, addList } from "../../stores/";

export default function AddNewTask({ type, id, collapse }) {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => setTitle(e.target.value);

  const action = type === "card" ? addCard({ id, title }) : addList(title);

  const handleSubmit = (e) => {
    e.preventDefault();
    collapse();
    dispatch(action);
  };

  return (
    <form
      className={`flex flex-col gap-2 px-2 py-2 my-5 mx-2 bg-slate-300 rounded font-semibold text-gray-800 capitalize ${
        type === "list" ? "w-72" : ""
      }`}
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
