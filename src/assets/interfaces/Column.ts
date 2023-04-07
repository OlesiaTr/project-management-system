import { Task } from './Task';

export interface Column {
  _id?: string;
  title?: string;
  order?: number;
  boardId?: string;
}
