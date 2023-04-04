export class Board {
  id: number;
  title: string;
  description: string;
  createdBy: string;
  createdAt: Date;

  constructor(id: number,  title: string,
  description: string,
  createdBy: string,
    createdAt: Date) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.createdBy = createdBy;
    this.createdAt = createdAt;
  }
}
