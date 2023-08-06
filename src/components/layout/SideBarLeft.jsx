import { BsPersonWorkspace } from "react-icons/bs";
import { useDispatch } from "react-redux";

import useLocalStorage from "../../hooks/useLocalStorage";

import { previewBoard } from "../../previewBoard";
import { setBoard } from "../../stores";

const bgs = [
  "https://images.unsplash.com/photo-1549558549-415fe4c37b60",
  "https://images.unsplash.com/photo-1690812099871-47b7f71c93af",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
  "https://images.unsplash.com/photo-1541727687969-ce40493cd847",
  "https://images.unsplash.com/photo-1493514789931-586cb221d7a7",
  "https://images.unsplash.com/photo-1482192505345-5655af888cc4",
  "https://images.unsplash.com/photo-1541701494587-cb58502866ab",
  "https://images.unsplash.com/photo-1542640244-7e672d6cef4e",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "https://images.unsplash.com/photo-1448375240586-882707db888b",
  "https://images.unsplash.com/photo-1498550744921-75f79806b8a7",
  "https://images.unsplash.com/photo-1449034446853-66c86144b0ad",
  "https://images.unsplash.com/photo-1472457897821-70d3819a0e24",
  "https://images.unsplash.com/photo-1487621167305-5d248087c724",
  "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5",
  "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6",
  "https://images.unsplash.com/photo-1445855743215-296f71d4b49c",
  "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d",
  "https://images.unsplash.com/photo-1464798429116-8e26f96b2e60",
  "https://images.unsplash.com/photo-1507290439931-a861b5a38200",
];

export default function SideBarLeft() {
  const [user] = useLocalStorage("user", "");
  const [_, setImg] = useLocalStorage("bgImg", "");

  const dispatch = useDispatch();

  const handleBG = (e) => {
    const selectedBg = e.target.dataset.id;
    setImg(selectedBg);
    document.body.style.backgroundImage = `url(${selectedBg})`;
  };

  return (
    <div className="w-72 py-10 px-5 h-screen  fixed  transition-all capitalize shadow-md z-10 hover:blur-0 hover:left-0 hover:bg-slate-900/95 blur-xs -left-68 bg-slate-500/50">
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
            {bgs.map((bg) => (
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
