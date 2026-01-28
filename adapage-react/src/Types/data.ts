export type Profil = {
  name: string;
  image: string;
  description: string;
  infoCard: InfoCard[];
  timeline: Timeline[];
  quotes: Quotes[];
};

export type InfoCard = {
  title: string;
  value: string;
};

export type Timeline = {
  year: number;
  description: string;
};

export type Quotes = {
  text: string;
  source: string;
};
