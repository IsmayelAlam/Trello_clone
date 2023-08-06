import { MdOutlineCancel } from "react-icons/md";

import CardHeading from "../cards/CardHeading";
import { useRef, useState } from "react";

export default function TaskModal({ card, listId, collapse }) {
  const ref = useRef();

  const id = { card: card.id, list: listId };

  return (
    <div
      className="fixed inset-0 backdrop-blur-sm z-100 flex items-center justify-center"
      ref={ref}
      onClick={(e) => (ref.current === e.target ? collapse() : null)}
    >
      <div className="bg-slate-800 rounded-lg shadow-md w-[60%] h-[90%] px-10 py-14 overflow-hidden grid grid-cols-[3fr,1fr] relative">
        <MdOutlineCancel
          className="w-5 h-5 absolute top-5 right-5 text-white cursor-pointer"
          onClick={collapse}
        />

        <div>
          <CardHeading title={card.title} id={id} />
          <p>label</p>
          <p>details</p>
          <p>tasks</p>
        </div>
        <div>
          <div>
            <button>rename</button>
          </div>
          <p>notes</p>
        </div>
      </div>
    </div>
  );
}
