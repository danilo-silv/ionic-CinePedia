export interface Actors {
  name: string;
  character: string;
  image: string;
}

export interface Banner {
  image: string;
}

export interface DetailItem {
  id: string;
  type: string;
  title: string;
  image: string;
  description: string;
  producer: string;
  creator: string;
  evaluation: string;
  actors: Actors[];
}

export type Movie = DetailItem;

export type Serie = DetailItem;
