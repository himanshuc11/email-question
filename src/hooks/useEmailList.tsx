import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import type { Email } from "../types";

export type Response = {
  list: Email[];
  total: number;
};

async function getEmails() {
  const res = await axios.get("https://flipkart-email-mock.vercel.app/");
  const data = res.data;
  return data as Response;
}

function useEmailList() {
  return useQuery({
    queryKey: ["repoData"],
    queryFn: getEmails,
  });
}

export default useEmailList;
