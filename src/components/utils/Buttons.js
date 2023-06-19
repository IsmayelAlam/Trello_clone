import { useState } from "react";

import { GoX } from "react-icons/go";

export default function Button({ type }) {
  const [expend, setExpend] = useState(false);

  const handleClick = () => setExpend(true);

  const classes = `hover:bg-slate-300 text-start rounded capitalize ${
    type === "card"
      ? "p-1 pl-2 m-2"
      : "p-2 my-5 mx-2 w-72 bg-slate-200/25 hover:text-white"
  }`;

  let content = (
    <button className={classes} onClick={handleClick}>
      + add new {type}
    </button>
  );

  if (expend)
    content = (
      <form
        className={`flex flex-col gap-2 px-2 py-2 my-5 mx-2 bg-slate-300 rounded font-semibold ${
          type === "list" ? "w-72" : ""
        }`}
      >
        <label>Title</label>

        <textarea
          type="text"
          required
          placeholder="Add title..."
          className="rounded resize-none scrollbar p-2 h-20"
        />

        <div className="flex gap-2 items-center">
          <button className="px-5 py-1 text-white capitalize font-semibold rounded shadow bg-green-600">
            Add {type}
          </button>
          <button>
            <GoX className="w-5 h-5" />
          </button>
        </div>
      </form>
    );

  return content;
}
