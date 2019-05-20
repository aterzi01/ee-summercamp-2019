import { IComments } from './comments';
// import { IGrades } from './grades';

export interface IProduct {
  id: number;
  title: string;
  img: string;
  description: string;
  grade: number[];
  comments: IComments[];
  favorite: boolean;
  price: number;
}
