import axios from "axios";
import { useQuery } from "@tanstack/react-query";

type Response = {
  id: string;
  body: string;
};

async function getEmails(id: number) {
  const res = await axios.get(
    `https://flipkart-email-mock.vercel.app/?id=${id}`
  );
  const data = res.data;
  return data as Response;
}

function useDetailedEmail(id: number) {
  return useQuery({
    queryKey: ["emailData", id],
    queryFn: () => getEmails(id),
    enabled: !!id,
  });
}

export default useDetailedEmail;
