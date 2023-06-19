import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function ProjectHeading() {
  const [icons, setIcons] = useState(true);

  let icon = icons ? (
    <AiOutlineStar className="h-7 w-7 cursor-pointer p-1" />
  ) : (
    <AiFillStar className="h-7 w-7 cursor-pointer p-1" />
  );

  return (
    <header className="w-screen fixed bg-slate-700 text-white h-14 ml-8 flex items-center justify-start gap-2">
      <h1 className="text-xl ml-5 capitalize">test project</h1>
      <div onClick={() => setIcons(!icons)}>{icon}</div>
    </header>
  );
}
