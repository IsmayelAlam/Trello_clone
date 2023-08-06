import { useState } from "react";
import { useDispatch } from "react-redux";
import { renameCard } from "../../stores";

export default function CardHeading({ card, id }) {
  const [rename, setRename] = useState(false);
  const [newTitle, setTitle] = useState(card.title);

  const dispatch = useDispatch();

  const time = new Date(card.date);

  const handleChange = (e) => setTitle(e.target.value);

  const handleRename = (e) => {
    e.preventDefault();
    setRename(!rename);
    dispatch(renameCard({ id, newTitle }));
  };

  return (
    <>
      <h2
        className="text-3xl font-semibold text-white capitalize"
        onClick={handleRename}
      >
        {rename ? (
          <form onSubmit={handleRename}>
            <input
              type="text"
              required
              autoFocus
              className="rounded text-black shadow-inner shadow-red-300 valid:shadow-green-300 outline-none w-full"
              onBlur={handleRename}
              onChange={handleChange}
              value={newTitle}
            />
          </form>
        ) : (
          card.title
        )}
      </h2>
      <div className="text-slate-500 text-sm my-2 font-semibold">
        <span>Created at: </span>
        <span>{time.toLocaleTimeString()}, </span>
        <span>
          {time.toLocaleDateString(undefined, {
            month: "short",
            day: "numeric",
          })}
        </span>
      </div>
    </>
  );
}
