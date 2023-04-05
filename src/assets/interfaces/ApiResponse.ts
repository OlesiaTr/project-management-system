import { User } from './User';

export interface ApiResponse {
  token: string;
  _id: string;
  user: User;
  name: string;
  login: string;
}
