export class Board {
  id?: string;
  title?: string;
  description?: string;
  createdBy?: string;
  createdAt?: Date;
  users?: [];
  owner?: string;

  constructor(
    id: string,
    title: string,
    description: string,
    createdBy: string,
    createdAt: Date,
    users: [],
    owner: string
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.createdBy = createdBy;
    this.createdAt = createdAt;
    this.users = users;
    this.owner = owner;
  }
}
