export class Board {
  _id?: string;
  title?: string;
  description?: string;
  createdBy?: string;
  createdAt?: Date;
  users?: [];
  owner?: string;

  constructor(
    _id: string,
    title: string,
    description: string,
    createdBy: string,
    createdAt: Date,
    users: [],
    owner: string
  ) {
    this._id = _id;
    this.title = title;
    this.description = description;
    this.createdBy = createdBy;
    this.createdAt = createdAt;
    this.users = users;
    this.owner = owner;
  }
}
