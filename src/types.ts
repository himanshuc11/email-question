type EmailFrom = {
  email: string;
  name: string;
};

export type Email = {
  id: string;
  from: EmailFrom;
  date: number;
  subject: string;
  short_description: string;
};
