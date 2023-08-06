import { BsPersonWorkspace } from "react-icons/bs";
import { useDispatch } from "react-redux";

import useLocalStorage from "../../hooks/useLocalStorage";

import { backgroundImages, previewBoard } from "../../previewBoard";
import { setBoard } from "../../stores";
import { useEffect } from "react";

export default function SideBarLeft() {
  const [user] = useLocalStorage("user", "");
  const [img, setImg] = useLocalStorage("bgImg", "");

  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.backgroundImage = img ? `url(${img})` : null;
  }, [img]);

  const handleBG = (e) => {
    const selectedBg = e.target.dataset.id;
    setImg(selectedBg);
  };

  return (
    <div className="w-[21rem] py-10 px-5 h-screen  fixed  transition-all capitalize shadow-md z-10 hover:blur-0 hover:left-0 hover:bg-slate-900/95 blur-xs -left-80 bg-slate-500/50">
      <div className="p-2 mb-2 flex items-center gap-3 font-semibold text-xl relative">
        <BsPersonWorkspace className="h-10 w-10 p-1 rounded-md bg-white text-black inline-block" />
        <h2>{user ? `${user}'s` : "user's"} workspace</h2>
      </div>

      <hr />

      <ul className="h-fit py-5 overflow-y-scroll scrollbar space-y-3">
        <li
          onClick={() => dispatch(setBoard(previewBoard))}
          className="py-2 hover:bg-slate-500 rounded-lg px-4 cursor-pointer font-semibold"
        >
          preview board
        </li>
        <li className="py-2 px-4">
          <span>change background</span>
          <hr className="my-4" />
          <ul className="h-[60vh] overflow-y-scroll scrollbar grid grid-cols-2 gap-2 p-2 items-center justify-center">
            {backgroundImages.map((bg) => (
              <img
                src={bg + "?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60"}
                className="hover:opacity-70 h-full w-full rounded-lg cursor-pointer font-semibold"
                onClick={handleBG}
                data-id={bg}
                key={bg}
              />
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
