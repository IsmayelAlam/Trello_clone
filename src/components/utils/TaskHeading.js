import { useState } from "react";
import { TbDotsVertical } from "react-icons/tb";

export default function TaskHeading({ title }) {
  const [expend, setExpend] = useState(false);

  let content;

  if (expend)
    content = (
      <div className="absolute top-full left-full h-screen/2 w-64 bg-slate-800 rounded shadow z-10">
        <div className="h-10 bg-slate-300 m-2">test</div>
        <div className="h-10 bg-slate-300 m-2">test</div>
      </div>
    );

  return (
    <header className="flex p-2 items-center justify-between overflow-visible">
      <h2 className="text-lg font-semibold capitalize px-4 rounded-lg">
        {title}
      </h2>
      <div className="relative">
        <TbDotsVertical
          className="h-7 w-7 cursor-pointer p-1 rounded hover:bg-slate-500"
          onClick={() => setExpend(!expend)}
        />
        {content}
      </div>
    </header>
  );
}
