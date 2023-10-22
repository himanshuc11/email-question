import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import type { Email, LocalEmail } from "../types";

type Response = {
  list: Email[];
  total: number;
};

type LocalResponse = {
  total: number;
  list: LocalEmail[];
};

function transformEmails(props: Response): LocalResponse {
  const localEmails: LocalEmail[] = props.list.map((email) => ({
    ...email,
    isFavorite: false,
    isRead: false,
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
  return data as Response;
}

function useEmailList() {
  return useQuery({
    queryKey: ["emailList"],
    queryFn: getEmails,
    select: transformEmails,
  });
}

export default useEmailList;
