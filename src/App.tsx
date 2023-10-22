import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function App() {
  const { data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      axios
        .get("https://flipkart-email-mock.vercel.app/")
        .then((res) => res.data),
  });
  return <div className="text-red-700">{JSON.stringify(data)}</div>;
}

export default App;
