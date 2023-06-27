import Tasks from "../tasks/Tasks";
import { Droppable } from "react-beautiful-dnd";

export default function TaskCard({ cards, index, id }) {
  return (
    <Droppable droppableId={id} type="card">
      {(provided) => {
        return (
          <ul
            className="max-h-[90%] min-h-[1rem] overflow-y-scroll scrollbar scroll-smooth z-0"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {cards.map((card, index) => (
              <Tasks card={card} key={card.id} index={index} />
            ))}
            {provided.placeholder}
          </ul>
        );
      }}
    </Droppable>
  );
}
