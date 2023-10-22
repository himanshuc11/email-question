import { format } from "date-fns";
import { DATE_FORMATS } from "./constants";

const date = 1582728505000;
const dateObject = new Date(date);

function App() {
  return (
    <div className="bg-secondary w-screen h-screen text-black">
      {format(dateObject, DATE_FORMATS.YEAR_TIME)}
    </div>
  );
}

export default App;
