import { useState } from "react";
import { useDispatch } from "react-redux";
import { renameCard } from "../../stores";

export default function CardHeading({ title, id }) {
  const [rename, setRename] = useState(false);
  const [newTitle, setTitle] = useState(title);

  const dispatch = useDispatch();

  const handleChange = (e) => setTitle(e.target.value);

  const handleRename = (e) => {
    e.preventDefault();
    setRename(!rename);
    dispatch(renameCard({ id, newTitle }));
  };

  return (
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
            className="rounded text-black shadow-inner shadow-red-300 valid:shadow-green-300 outline-none"
            onBlur={handleRename}
            onChange={handleChange}
            value={newTitle}
          />
        </form>
      ) : (
        title
      )}
    </h2>
  );
}
