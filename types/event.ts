export type EventItem = {
  date: string;
  time?: string;
  description: string;
  venue: string;
  link?: string;
  en?: {
    description: string;
    venue: string;
    link?: string;
  };
};
