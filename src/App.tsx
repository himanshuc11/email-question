import axios from "axios";
import { useQuery } from "@tanstack/react-query";

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
      <Email />
      <Email />
      <Email />
      <Email />
      <Email />
    </div>
  );
}

export default App;
