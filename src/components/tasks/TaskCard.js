import Tasks from "../tasks/Tasks";

export default function TaskCard({ cards }) {
  return (
    <ul className="max-h-[90%] overflow-y-scroll scrollbar scroll-smooth z-0">
      {cards.map((card) => (
        <Tasks card={card} key={card.id} />
      ))}
    </ul>
  );
}
