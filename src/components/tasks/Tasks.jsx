import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { BsListTask } from "react-icons/bs";
import { CiStickyNote } from "react-icons/ci";
import { AiOutlineInfoCircle } from "react-icons/ai";

import TaskModal from "./TaskModal";
import { createPortal } from "react-dom";

const portal = document.getElementById("portal");

export default function Tasks({ card, index, listId }) {
  const [modal, setModal] = useState(false);

  const showModels = () => setModal((model) => !model);

  return (
    <Draggable key={card.id} draggableId={card.id} index={index}>
      {(provided, snap) => {
        return (
          <li
            key={card}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            onClick={modal ? null : showModels}
          >
            <div
              className={`px-2 py-1 m-2 bg-gray-800 rounded capitalize shadow cursor-pointer relative z-0 space-y-2 ${
                snap.isDragging ? "opacity-90 rotate-3" : ""
              }`}
            >
              <div className="flex flex-wrap items-center space-x-1">
                <div className="rounded-lg h-2 w-10 bg-red-700"></div>
                <div className="rounded-lg h-2 w-10 bg-green-700"></div>
                <div className="rounded-lg h-2 w-10 bg-blue-700"></div>
              </div>
              <h2 className="overflow-hidden">{card.title}</h2>
              <div className="flex items-center gap-1 justify-start">
                {card.description && (
                  <AiOutlineInfoCircle className="h-4 w-4" />
                )}
                {card.taskList?.length > 0 && (
                  <BsListTask className="h-4 w-4" />
                )}
                {card.notes?.length > 0 && <CiStickyNote className="h-4 w-4" />}
              </div>
            </div>
            {modal &&
              createPortal(
                <TaskModal card={card} listId={listId} collapse={showModels} />,
                portal
              )}
          </li>
        );
      }}
    </Draggable>
  );
}
