import "./assets/css/reset.css";
import "./assets/css/base.css";
import "./assets/css/variables.css";

import Taskbar from "./components/Taskbar/Taskbar";
import Workspace from "./components/Workspace/Workspace";

function App() {
  return (
    <div>
      <Workspace />
      <Taskbar />
    </div>
  )
}

export default App
