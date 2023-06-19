import SideBarLeft from "./components/layout/SideBarLeft";
import ProjectHeading from "./components/layout/ProjectHeading";
import TaskList from "./components/layout/TaskList";

function App() {
  return (
    <div className="overflow-y-hidden h-screen scrollbar relative bg-slate-600">
      <ProjectHeading />
      <SideBarLeft />
      <TaskList />
    </div>
  );
}

export default App;
