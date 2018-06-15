
import { Id } from './model.id';

export class Article {
  id: Id;
  title: string;
  seoName: string;
  date: number;
  location: string;
  simpleText: string;
  content: string;
  image: string;
}
