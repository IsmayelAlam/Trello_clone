import { useState } from "react";

import { GoX } from "react-icons/go";

export default function Button({ type }) {
  const [expend, setExpend] = useState(false);

  const handleClick = () => setExpend(true);

  let content;

  if (type === "card")
    content = (
      <button
        className="p-1 pl-2 m-2 hover:bg-slate-300 text-start rounded capitalize"
        onClick={handleClick}
      >
        + add new card
      </button>
    );
  if (type === "list")
    content = (
      <button
        className="px-2 py-2 my-5 mx-2 w-72 text-start rounded capitalize bg-slate-200/25 hover:bg-slate-300 hover:text-white"
        onClick={handleClick}
      >
        + add new list
      </button>
    );

  if (expend)
    content = (
      <form
        className={`flex flex-col gap-2 px-2 py-2 my-5 mx-2 bg-slate-300 rounded font-semibold ${
          type === "list" ? "w-72" : ""
        }`}
      >
        <label htmlFor="title">Title</label>
        <textarea
          type="text"
          id="title"
          name="title"
          required
          placeholder="Add a short title..."
          className="rounded resize-none scrollbar p-2 h-20"
        />
        <div className="flex gap-2 items-center">
          <button className="px-5 py-1 text-white font-semibold rounded shadow bg-green-600">
            Add
          </button>
          <button>
            <GoX className="w-5 h-5" />
          </button>
        </div>
      </form>
    );

  return content;
}
