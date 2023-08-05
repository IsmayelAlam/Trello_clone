import SideBarLeft from "./components/layout/SideBarLeft";
import ProjectHeading from "./components/utils/ProjectHeading";
import Board from "./components/layout/Boards";
import useLocalStorage from "./hooks/useLocalStorage";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function App() {
  const [saveList, setSaveList] = useLocalStorage("list", "");
  const currentList = useSelector((state) => state.list);

  const [close, setClose] = useState(
    JSON.stringify(saveList) === JSON.stringify(currentList)
  );

  useEffect(() => {
    setClose(JSON.stringify(saveList) === JSON.stringify(currentList));
  }, [currentList, saveList, close]);

  window.onbeforeunload = () => close && alert();

  return (
    <div className="overflow-y-hidden h-screen scrollbar bg-cover bg-center text-gray-300 relative">
      <ProjectHeading setSaveList={setSaveList} currentList={currentList} />
      <SideBarLeft />
      <Board />
    </div>
  );
}

export default App;
