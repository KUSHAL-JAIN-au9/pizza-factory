import { Badge, Button } from "flowbite-react";
import "./App.css";

function App() {
  return (
    <div>
      {" "}
      <Button>Click me</Button>
      <Badge>Badge</Badge>
      <button
        type="button"
        className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 "
      >
        Purple
      </button>
    </div>
  );
}

export default App;
