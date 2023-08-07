import { useState } from "react";
import { useDispatch } from "react-redux";
import { renameCard } from "../../stores";
import { BiEditAlt } from "react-icons/bi";

export default function CardHeading({ card, id }) {
  const [rename, setRename] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [newTitle, setTitle] = useState(card.title);

  const dispatch = useDispatch();

  const time = new Date(card.date);

  const handleRename = (e) => {
    e.preventDefault();
    setRename(!rename);
    dispatch(renameCard({ id, newTitle }));
  };

  return (
    <>
      <div
        className="flex items-center justify-between w-full text-white cursor-pointer"
        onMouseEnter={() => setShowEdit((d) => !d)}
        onMouseLeave={() => setShowEdit((d) => !d)}
      >
        <h2
          className="text-3xl font-semibold capitalize cursor-pointer hover:text-white/75 transition-all duration-150 grow"
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
                onChange={(e) => setTitle(e.target.value)}
                value={newTitle}
              />
            </form>
          ) : (
            card.title
          )}
        </h2>
        <div className="w-5 h-5" onClick={handleRename}>
          {showEdit && <BiEditAlt className="w-5 h-5" />}
        </div>
      </div>
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
