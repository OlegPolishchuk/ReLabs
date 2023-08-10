export interface User {
  id: number;
  name: string;
  role: string;
  ctime: number;
}

export interface FetchUsersResponse  {
  total: number;
  per_page: number;
  page: number;
  limit: number;
  offset: number;
  items: User[];
}