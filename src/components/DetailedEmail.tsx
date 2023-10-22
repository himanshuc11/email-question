import useDetailedEmail from "../hooks/useDetailedEmail";

type Props = {
  id: number;
};

function DetailedEmail(props: Props) {
  const { data } = useDetailedEmail(props.id);
  return <div className="w-10/12">{JSON.stringify(data)}</div>;
}

export default DetailedEmail;
