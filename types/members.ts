export type Member = {
  name: string;
  organization: string;
  affiliation: string;
  role: string;
  url?: string;
};

export type MemberGroup = {
  title: string;
  members: Member[];
};
