import { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { updateCardDescription } from "../../stores";
import { BiEditAlt } from "react-icons/bi";

export default function CardDescription({ card, id }) {
  const [update, setUpdate] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [newDescription, setDescription] = useState(card.description);
  const dispatch = useDispatch();

  const empty = <span className="text-sm">&mdash; </span>;

  const handleUpdate = (e) => {
    e.preventDefault();
    setUpdate(!update);
    dispatch(updateCardDescription({ id, newDescription }));
  };

  return (
    <div className="text-white space-y-2">
      <div className="flex items-center gap-1 text-md border-b-2 w-fit my-2">
        <AiOutlineInfoCircle />
        <p>Description</p>
      </div>

      <div
        onClick={() => setUpdate(true)}
        className="cursor-pointer w-full hover:bg-slate-700 px-2 py-1 rounded-lg flex items-center justify-between"
        onMouseEnter={() => setShowEdit((d) => !d)}
        onMouseLeave={() => setShowEdit((d) => !d)}
      >
        {update ? (
          <textarea
            type="text"
            required
            autoFocus
            className="rounded text-black shadow-inner shadow-red-300 valid:shadow-green-300 outline-none w-full h-24 resize-none scrollbar"
            onBlur={handleUpdate}
            onChange={(e) => setDescription(e.target.value)}
            value={newDescription}
          />
        ) : (
          <p>{card.description || empty}</p>
        )}
        <div className="w-5 h-5">
          {showEdit && <BiEditAlt className="w-5 h-5" />}
        </div>
      </div>
    </div>
  );
}
