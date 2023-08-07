import { MdOutlineCancel } from "react-icons/md";

import CardHeading from "../cards/CardHeading";
import { useRef } from "react";
import CardDescription from "../cards/CardDescription";
import CardTasks from "../cards/CardTasks";

export default function TaskModal({ card, listId, collapse }) {
  const ref = useRef();

  const id = { card: card.id, list: listId };

  return (
    <div
      className="fixed inset-0 backdrop-blur-sm z-100 flex items-center justify-center"
      ref={ref}
      onClick={(e) => (ref.current === e.target ? collapse() : null)}
    >
      <div className="bg-slate-800 rounded-lg shadow-md w-[60%] h-[90%] px-10 py-14 overflow-hidden overflow-y-scroll scrollbar grid grid-cols-[3fr,1fr] gap-4 relative">
        <MdOutlineCancel
          className="w-5 h-5 absolute top-5 right-5 text-white cursor-pointer"
          onClick={collapse}
        />

        <div>
          <CardHeading card={card} id={id} />
          <p>label</p>
          <CardDescription card={card} id={id} />
          <CardTasks tasks={card.taskList} id={id} />
        </div>
        <div className="w-72">
          <div className="flex flex-col gap-1 text-md font-semibold mb-4 w-max">
            <button className="outline-none py-1 px-2 w-full bg-slate-300 hover:bg-slate-400 active:bg-slate-100 rounded-md">
              Rename Card
            </button>
            <button className="outline-none py-1 px-2 w-full bg-slate-300 hover:bg-slate-400 active:bg-slate-100 rounded-md">
              Delete Card
            </button>
            <button className="outline-none py-1 px-2 w-full bg-slate-300 hover:bg-slate-400 active:bg-slate-100 rounded-md">
              Update Description
            </button>
          </div>
          <p>{/* <CardTasks card={card} id={id} /> */}</p>
        </div>
      </div>
    </div>
  );
}
