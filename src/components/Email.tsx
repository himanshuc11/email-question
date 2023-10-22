import Avatar from "./Avatar";
import LightAndDarkText from "./LightAndDark";
import { format } from "date-fns";
import { DATE_FORMATS } from "../constants";

const date = 1582728505000;
const dateObject = new Date(date);

function Email() {
  return (
    <section className="border border-borderGrey w-full rounded-md mb-2 flex px-4 py-1">
      <Avatar initials={"F"} />
      <div className="ml-4">
        <LightAndDarkText lightText="From: " darkText="Lorem Ipsum" />
        <br />
        <LightAndDarkText lightText="Subject: " darkText="Lorem Ipsum" />
        <p className="mt-2 mb-1.5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur est
        </p>
        <time
          className="text-textGrey text-sm"
          dateTime={format(dateObject, DATE_FORMATS.YEAR_TIME)}
        >
          {format(dateObject, DATE_FORMATS.YEAR_TIME)}
        </time>
      </div>
    </section>
  );
}

export default Email;
