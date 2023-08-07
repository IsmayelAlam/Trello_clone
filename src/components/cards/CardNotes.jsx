import { useState } from "react";
import { useDispatch } from "react-redux";
import { BiMessageSquareAdd } from "react-icons/bi";
import { CiStickyNote } from "react-icons/ci";
import { BsTrash } from "react-icons/bs";

import { addCardNote, deleteCardNote } from "../../stores";

export default function CardNotes({ notes, id }) {
  const [newNote, setNewNote] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCardNote({ id, newNote }));
    setNewNote("");
  };

  return (
    <div className="text-white space-y-4 mt-8">
      <form
        className="rounded-lg w-full p-1 h-12 flex items-center justify-start bg-slate-700"
        onSubmit={handleSubmit}
      >
        <label htmlFor="notes">
          <CiStickyNote className="w-5 h-5" />
        </label>
        <input
          type="text"
          className="bg-transparent h-full w-full px-1 outline-none mx-2"
          id="notes"
          placeholder="add notes..."
          required
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button type="submit" className="text-lg outline-none">
          <BiMessageSquareAdd />
        </button>
      </form>
      <ul className="space-y-2 w-full text-justify list-disc pl-5">
        {notes?.map((note, index) => (
          <li key={index}>
            <div className="flex items-center justify-between w-full break-all space-x-1">
              <span>{note}</span>
              <span
                onClick={() => dispatch(deleteCardNote({ id, index }))}
                className="w-4 h-4 cursor-pointer text-white/50 hover:text-white"
              >
                <BsTrash />
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
