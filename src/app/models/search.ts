export interface ListProp {
  id: string;
  title: string;
  image: string;
  description: string;
  producer: string;
}

export interface Banner {
  image: string;
}

export type Movie = ListProp;

export type Serie = ListProp;
