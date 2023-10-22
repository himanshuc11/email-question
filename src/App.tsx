import Email from "./components/Email";
import useEmailList from "./hooks/useEmailList";

function App() {
  const { data, isLoading } = useEmailList();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="bg-secondary h-full w-full px-10 mt-10">
      {data?.list?.map((localEmail) => (
        <Email {...localEmail} />
      ))}
    </div>
  );
}

export default App;
