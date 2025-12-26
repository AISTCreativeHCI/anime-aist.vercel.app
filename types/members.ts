export type Member = {
  name: string;
  pi?: string;
  affiliation: string;
  role: string;
  url?: string;
  en?: {
    name: string;
    pi?: string;
    affiliation: string;
    role?: string;
    url?: string;
  };
};

export type MemberGroup = {
  title: string;
  members: Member[];
  en?: {
    title: string;
  };
};
