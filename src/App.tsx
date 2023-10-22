import Email from "./components/Email";
//import useEmailList from "./hooks/useEmailList";

function App() {
  //const { data } = useEmailList();

  return (
    <div className="bg-secondary h-full w-full px-10 mt-10">
      <Email />
      <Email />
      <Email />
      <Email />
      <Email />
    </div>
  );
}

export default App;
