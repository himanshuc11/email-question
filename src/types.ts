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

export type LocalEmail = Email & {
  isFavorite: boolean;
  isRead: boolean;
};

export type EmailDetailState = {
  id: number | null;
  initials: string;
  subject: string;
  date: string;
};
