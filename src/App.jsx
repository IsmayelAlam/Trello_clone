import SideBarLeft from "./components/layout/SideBarLeft";
import ProjectHeading from "./components/layout/ProjectHeading";
import Board from "./components/layout/Boards";
import useLocalStorage from "./hooks/useLocalStorage";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import SafeGuardPage from "./components/layout/SafeGuardPage";

function App() {
  const windowWidth = useRef(window.innerWidth);
  const [saveList, setSaveList] = useLocalStorage("list", "");
  const currentList = useSelector((state) => state.list);

  const [close, setClose] = useState(
    JSON.stringify(saveList) === JSON.stringify(currentList)
  );

  useEffect(() => {
    setClose(JSON.stringify(saveList) === JSON.stringify(currentList));
  }, [currentList, saveList, close, windowWidth]);

  window.onbeforeunload = () => close && alert();

  let content = (
    <>
      <ProjectHeading
        setSaveList={setSaveList}
        saveList={saveList}
        currentList={currentList}
      />
      <SideBarLeft />
      <Board />
    </>
  );

  if (windowWidth.current < 1250) content = <SafeGuardPage />;

  return (
    <div className="overflow-y-hidden h-screen scrollbar bg-cover bg-center text-gray-300 relative">
      {content}
    </div>
  );
}

export default App;
