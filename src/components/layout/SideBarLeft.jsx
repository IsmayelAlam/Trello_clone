import { BsPersonWorkspace } from "react-icons/bs";
import { useDispatch } from "react-redux";

import useLocalStorage from "../../hooks/useLocalStorage";

import { previewBoard } from "../../previewBoard";
import { setBoard } from "../../stores";

const bgs = [
  "https://images.unsplash.com/photo-1690812099871-47b7f71c93af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1185&q=80",
  "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1493514789931-586cb221d7a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
  "https://images.unsplash.com/photo-1482192505345-5655af888cc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80",
  "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
  "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1549558549-415fe4c37b60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1719&q=80",
  "https://images.unsplash.com/photo-1498550744921-75f79806b8a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
];

export default function SideBarLeft() {
  const [user] = useLocalStorage("user", "");
  const [_, setImg] = useLocalStorage("bgImg", "");

  const dispatch = useDispatch();

  const handleBG = (e) => {
    const selectedBg = e.target.src;
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
          <ul className="h-[60vh] overflow-y-scroll scrollbar space-y-3">
            {bgs.map((bg) => (
              <img
                src={bg}
                className="py-2 hover:bg-slate-500 rounded-lg px-4 cursor-pointer font-semibold rounded-lg"
                onClick={handleBG}
                key={bg}
              />
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
