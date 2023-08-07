import { useState } from "react";
import { useDispatch } from "react-redux";
import { BiMessageSquareAdd } from "react-icons/bi";
import { CiStickyNote } from "react-icons/ci";

import { addCardTask } from "../../stores";

export default function CardNotes({ notes = {}, id }) {
  const [newNote, setNewNote] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(addCardTask({ id, newTask }));
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
      <ul className="space-y-2 list-disc w-full px-5 text-justify">
        {notes.map((note, index) => (
          <li>{note}</li>
        ))}
      </ul>
    </div>
  );
}
