import Avatar from "./Avatar";
import LightAndDarkText from "./LightAndDark";
import { format } from "date-fns";
import { DATE_FORMATS } from "../constants";
import type { LocalEmail, EmailDetailState } from "../types";

type Props = LocalEmail & {
  setEmailData: React.Dispatch<React.SetStateAction<EmailDetailState>>;
};

function Email(props: Props) {
  const { isRead = false, isFavorite = false } = props;
  const backgroundColor = isRead ? "bg-readWhite" : "bg-white";

  const initials = props?.from?.name?.[0];
  const fromText = props?.from?.name + " " + props?.from?.email;
  const dateObject = new Date(props?.date);
  const dateTime = format(dateObject, DATE_FORMATS.YEAR_TIME);

  const handleClick = () => {
    const id = parseInt(props?.id, 10);
    props?.setEmailData((prevValue) => {
      if (prevValue.id === id)
        return { id: null, initials: "", date: "", subject: "" };
      return { id, initials, date: dateTime, subject: props?.subject };
    });
  };

  return (
    <section
      className={
        "border border-borderGrey w-full rounded-md mb-3 flex px-4 py-3 cursor-pointer truncate " +
        backgroundColor
      }
      onClick={handleClick}
    >
      <Avatar initials={initials} />
      <div className="ml-4 truncate">
        <LightAndDarkText lightText="From: " darkText={fromText} />
        <br />
        <LightAndDarkText lightText="Subject: " darkText={props.subject} />
        <p className="mt-2 mb-1.5 truncate">{props?.short_description}</p>
        <div className="flex">
          <time className="text-textGrey text-sm" dateTime={dateTime}>
            {dateTime}
          </time>
          {isFavorite ? (
            <p className="text-sm text-primary font-bold ml-2">Favorite</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default Email;
