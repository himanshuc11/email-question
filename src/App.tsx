import { useState } from "react";
import Email from "./components/Email";
import useEmailList from "./hooks/useEmailList";
import DetailedEmail from "./components/DetailedEmail";

function App() {
  const [emailDetails, setEmailDetails] = useState<number | null>(null);
  const { data, isLoading } = useEmailList();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="bg-secondary h-full w-full px-10 mt-10">
      <div className="flex flex-1">
        <div className="flex flex-col w-full">
          {data?.list?.map((localEmail) => (
            <Email {...localEmail} setEmailData={setEmailDetails} />
          ))}
        </div>
        {emailDetails !== null ? <DetailedEmail id={emailDetails} /> : null}
      </div>
    </div>
  );
}

export default App;
