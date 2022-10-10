import "./style.css";
import Dashboard from "../Dashboard/Dashboard";
import Clock from "../Clock/Clock";

const Workspace = () => {

  return (
    <div className="container">
     <Clock />
     <Dashboard />
    </div>
  );
};

export default Workspace;
