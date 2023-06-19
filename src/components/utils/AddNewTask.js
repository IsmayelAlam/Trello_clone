import { GoX } from "react-icons/go";

export default function AddNewTask({ type, ...rest }) {
  return (
    <form
      className={`flex flex-col gap-2 px-2 py-2 my-5 mx-2 bg-slate-300 rounded font-semibold text-gray-800 capitalize ${
        type === "list" ? "w-72" : ""
      }`}
    >
      <label>Title</label>

      <textarea
        type="text"
        required
        placeholder="Add title..."
        className="rounded resize-none scrollbar p-2 h-20"
        autoFocus
      />

      <div className="flex gap-2 items-center">
        <button
          className="px-5 py-1 text-white rounded shadow bg-blue-500"
          {...rest}
        >
          Add list
        </button>
        <button {...rest}>
          <GoX className="w-5 h-5 text-black" />
        </button>
      </div>
    </form>
  );
}
