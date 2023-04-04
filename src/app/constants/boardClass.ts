export class Board {
  id: string;
  title: string;
  description: string;
  createdBy: string;
  createdAt: Date;

  constructor(
    id: string,
    title: string,
    description: string,
    createdBy: string,
    createdAt: Date
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.createdBy = createdBy;
    this.createdAt = createdAt;
  }
}
