export interface Task {
  _id: string;
  title: string;
  description: string;
  columnId: string;
  order: number;
  boardId: string;
  userId: string;
  users: [string];
}
