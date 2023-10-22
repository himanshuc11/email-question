import { useState } from "react";
import Email from "./components/Email";
import useEmailList from "./hooks/useEmailList";
import DetailedEmail from "./components/DetailedEmail";
import { EmailDetailState } from "./types";

function App() {
  const [emailDetails, setEmailDetails] = useState<EmailDetailState>({
    id: null,
    initials: "",
    subject: "",
    date: "",
  });
  const { data, isLoading } = useEmailList();

  const divWidth = emailDetails.id !== null ? "w-5/12" : "w-full";

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="bg-secondary h-full w-full px-10 mt-10">
      <div className="flex flex-1">
        <div className={"flex flex-col " + divWidth}>
          {data?.list?.map((localEmail) => (
            <Email
              {...localEmail}
              setEmailData={setEmailDetails}
              key={localEmail.id}
            />
          ))}
        </div>
        {emailDetails.id !== null ? <DetailedEmail {...emailDetails} /> : null}
      </div>
    </div>
  );
}

export default App;
