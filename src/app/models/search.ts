export interface Actors {
  name: string;
  character: string;
  image: string;
}

export interface Banner {
  id: number;
  type: number;
  image: string;
  link: string;
}

export interface DetailItem {
  id: string;
  type: number;
  title: string;
  image: string;
  description: string;
  producer: string;
  creator: string;
  evaluation: string;
  link: string;
  actors: Actors[];
}
