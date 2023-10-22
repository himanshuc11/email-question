import Avatar from "./Avatar";
import LightAndDarkText from "./LightAndDark";

function Email() {
  return (
    <section className="border border-borderGrey w-full rounded-md mb-2 flex px-4 py-1">
      <Avatar initials={"F"} />
      <div className="ml-4">
        <LightAndDarkText lightText="From: " darkText="Lorem Ipsum" />
        <br />
        <LightAndDarkText lightText="Subject: " darkText="Lorem Ipsum" />
        <p className="my-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur est
        </p>
      </div>
    </section>
  );
}

export default Email;
