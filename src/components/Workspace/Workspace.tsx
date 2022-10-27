import "./style.css";
import Top from "../Top/Top";
import Mid from "../Mid/Mid";
import Bottom from "../Bottom/Bottom";
import Third from "../Third/Third";
import Fourth from "../Fourth/Fourth";

const Workspace = () => {

  return (
    <div className="container">
      <Top />
      <Mid />
      <Third />
      <Fourth />
      <Bottom />
    </div>
  );
};

export default Workspace;
