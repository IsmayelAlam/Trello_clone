import { AiOutlineCloseCircle, AiOutlineInfoCircle } from "react-icons/ai";
export default function CardDescription({ card, id }) {
  return (
    <div className="mr-5 text-white space-y-4">
      <div className="flex items-center gap-1 text-md border-b-2 w-fit my-2">
        <AiOutlineInfoCircle />
        <p>description</p>
      </div>
      <p>{card.description}</p>
      <div>
        <button>add</button>
        <button>x</button>
      </div>
    </div>
  );
}
