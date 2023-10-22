import { useEffect, useState } from "react";
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
  const [filterBy, setFilterBy] = useState<string | null>(null);
  const { data, isLoading } = useEmailList();

  const getFilteredData = () => {
    switch (true) {
      case filterBy === null:
        return data?.list;
      case filterBy === "unread":
        return data?.list?.filter((elem) => elem?.isRead === false);
      case filterBy === "read":
        return data?.list?.filter((elem) => elem?.isRead === true);
      case filterBy === "fav":
        return data?.list?.filter((elem) => elem.isFavorite === true);
      default:
        return data?.list;
    }
  };

  const divWidth = emailDetails.id !== null ? "w-5/12" : "w-full";

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="bg-secondary h-full w-full px-10 mt-10">
      <search className="flex my-4 gap-x-2">
        <p className="text-textGrey text-sm">Filter By</p>
        <button onClick={() => setFilterBy("unread")}>Unread</button>
        <button onClick={() => setFilterBy("read")}>Read</button>
        <button onClick={() => setFilterBy("fav")}>Favorite</button>
      </search>
      <div className="flex flex-1">
        <div className={"flex flex-col " + divWidth}>
          {getFilteredData()?.map((localEmail) => (
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
