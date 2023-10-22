import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import type { Email, LocalEmail } from "../types";
import { getDataFromLocalStore } from "../utils";

type Response = {
  list: Email[];
  total: number;
};

type LocalResponse = {
  total: number;
  list: LocalEmail[];
};

function transformEmails(props: Response): LocalResponse {
  const favArray = getDataFromLocalStore("fav");
  const readArray = getDataFromLocalStore("read");

  const favSet = new Set(favArray);
  const readSet = new Set(readArray);

  console.log(favSet);

  const localEmails: LocalEmail[] = props.list.map((email) => ({
    ...email,
    isFavorite: favSet.has(parseInt(email.id)),
    isRead: readSet.has(parseInt(email.id)),
  }));

  const transformedData: LocalResponse = {
    total: props?.total,
    list: localEmails,
  };
  return transformedData;
}

async function getEmails() {
  const res = await axios.get("https://flipkart-email-mock.vercel.app/");
  const data = res.data;
  return transformEmails(data);
}

function useEmailList() {
  return useQuery({
    queryKey: ["emailList"],
    queryFn: getEmails,
    refetchOnMount: true,
  });
}

export default useEmailList;
