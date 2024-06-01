import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>React course v8!</h1>
      <Pet name="Xencia" animal="Dog" breed="Amstaff" />
      <Pet name="Pepper" animal="Bird" breed="Parrot" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
