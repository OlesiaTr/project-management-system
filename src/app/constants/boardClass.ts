import { Column } from 'src/assets/interfaces/Column';

export class Board {
  _id?: string;
  title?: string;
  description?: string;
  createdBy?: string;
  createdAt?: Date;
  users?: [];
  owner?: string;
  columns?: Column[];

  constructor(
    _id: string,
    title: string,
    description: string,
    createdBy: string,
    createdAt: Date,
    users: [],
    owner: string,
    columns: Column[]
  ) {
    this._id = _id;
    this.title = title;
    this.description = description;
    this.createdBy = createdBy;
    this.createdAt = createdAt;
    this.users = users;
    this.owner = owner;
    this.columns = columns;
  }
}
