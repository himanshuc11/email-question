type Props = {
  lightText: string;
  darkText: string;
};

function LightAndDarkText(props: Props) {
  return (
    <>
      <span className="text-textGrey">{props.lightText}</span>
      <span className="text-textGrey font-medium">{props.darkText}</span>
    </>
  );
}

export default LightAndDarkText;
