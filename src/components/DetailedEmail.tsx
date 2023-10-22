import { useEffect, useRef } from "react";
import useDetailedEmail from "../hooks/useDetailedEmail";
import Avatar from "./Avatar";
import { storeFavDataToLocalStore } from "../utils";
import type { EmailDetailState } from "../types";

function DetailedEmail(props: EmailDetailState) {
  const { data } = useDetailedEmail(props.id || 0);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (!data || bodyRef?.current === null) return;
    // @ts-ignore
    bodyRef.current.innerHTML = data?.body;
  }, [data]);

  const handleMarkClick = () => {
    storeFavDataToLocalStore("fav", props?.id || 0);
  };

  return (
    <section className="w-full border rounded-md border-borderGrey bg-white px-5 ml-5 py-5 max-h-screen">
      <header className="flex">
        <Avatar initials={props.initials} />
        <div className="flex justify-between w-full items-center">
          <div className="ml-5 h-20 flex flex-col justify-between">
            <p className="text-3xl text-textGrey font-semibold">
              {props?.subject}
            </p>
            <time dateTime={props.date}>{props.date}</time>
          </div>
          <button
            className="bg-primary text-white px-2 py-1 mb-auto rounded-full"
            onClick={handleMarkClick}
          >
            Mark as favorite
          </button>
        </div>
      </header>
      <section ref={bodyRef} className="mt-5" />
    </section>
  );
}

export default DetailedEmail;
