import Tasks from "../tasks/Tasks";

export default function TaskCard({ cards, index, id }) {
  return (
    <ul className="max-h-[90%] overflow-y-scroll scrollbar scroll-smooth z-0">
      {cards.map((card, index) => (
        <Tasks card={card} key={card.id} index={index} />
      ))}
    </ul>
  );
}
