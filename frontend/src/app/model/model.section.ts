import { Id } from './model.id';

export class Section {
  idKey: Id;
  parentId: Id;
  name: string;
  seoName: string;
  description: string;
  articleCount: number;
  image: string;
}