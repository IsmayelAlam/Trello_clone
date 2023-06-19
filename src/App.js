import TaskList from "./components/TaskList";
import SideBarLeft from "./components/layout/SideBarLeft";
import ProjectHeading from "./components/layout/ProjectHeading";

function App() {
  return (
    <div className="overflow-y-hidden h-screen scrollbar relative bg-slate-400">
      <ProjectHeading />
      <SideBarLeft />
      <TaskList />
    </div>
  );
}

export default App;
