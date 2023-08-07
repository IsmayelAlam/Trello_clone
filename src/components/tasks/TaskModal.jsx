import { MdOutlineCancel } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";

import CardHeading from "../cards/CardHeading";
import { useRef, useState } from "react";
import CardDescription from "../cards/CardDescription";
import CardTasks from "../cards/CardTasks";
import CardNotes from "../cards/CardNotes";
import CardLabel from "../cards/CardLabel";
import AddLabel from "../utils/AddLabel";
import { deleteCard } from "../../stores";
import { useDispatch } from "react-redux";
import { BsTrash } from "react-icons/bs";

export default function TaskModal({ card, id, collapse }) {
  const [show, setShow] = useState(false);

  const ref = useRef();
  const dispatch = useDispatch();

  return (
    <div
      className="fixed inset-0 backdrop-blur-sm z-100 flex items-center justify-center"
      ref={ref}
      onClick={(e) => (ref.current === e.target ? collapse() : null)}
    >
      <div className="bg-slate-800 rounded-xl shadow-lg w-[50%] h-[90%] px-10 py-14 overflow-hidden overflow-y-scroll scrollbar grid grid-cols-[3fr,1fr] justify-self-start gap-10 relative">
        <MdOutlineCancel
          className="w-5 h-5 absolute top-5 right-5 text-white cursor-pointer"
          onClick={collapse}
        />

        <div className="">
          <CardHeading card={card} id={id} show={show} />

          <div className="flex w-max items-center gap-1 relative mt-1 mb-5 py-1 text-white">
            <CardLabel label={card.label} id={id} styleClass="py-1" />
            <button onClick={setShow.bind(null, !show)}>
              {card.label?.length > 0 ? (
                <AiOutlinePlusCircle className="w-5 h-5" />
              ) : (
                <span className="border truncate rounded-full px-2 font-semibold text-white/50 text-xs hover:text-white capitalize">
                  add Label
                </span>
              )}
            </button>
            {show && <AddLabel id={id} label={card.label} close={setShow} />}
          </div>

          <CardDescription card={card} id={id} />

          <CardTasks tasks={card.taskList} id={id} />
        </div>

        <div className="w-72 flex flex-col">
          <button
            className="outline-none py-px px-2 w-fit mx-auto bg-slate-300 hover:bg-slate-400 active:bg-slate-100 rounded-md flex items-center gap-1"
            onClick={() => dispatch(deleteCard(id))}
          >
            <BsTrash />
            Delete Card
          </button>
          <CardNotes notes={card.notes} id={id} />
        </div>
      </div>
    </div>
  );
}
