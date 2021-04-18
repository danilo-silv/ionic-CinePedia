export interface Actors {
  name: string;
  character: string;
  image: string;
}

export interface Recommendations {
  id: number;
  type: number;
  image: string;
  link: string;
}

export interface DetailItem {
  id: number;
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
