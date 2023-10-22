import { format } from "date-fns";
import { DATE_FORMATS } from "./constants";

const date = 1582728505000;
const dateObject = new Date(date);

import Email from "./components/Email";

function App() {
  // const { data } = useQuery({
  //   queryKey: ["repoData"],
  //   queryFn: () =>
  //     axios
  //       .get("https://flipkart-email-mock.vercel.app/")
  //       .then((res) => res.data),
  // });
  return (
    <div className="bg-secondary h-full w-full">
      <div className="bg-secondary w-screen h-screen text-black">
        {format(dateObject, DATE_FORMATS.YEAR_TIME)}
      </div>
      <Email />
      <Email />
      <Email />
      <Email />
      <Email />
    </div>
  );
}

export default App;
