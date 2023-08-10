import { Pagination } from '@/shared/constants/pagination';

export const countTotalPages = (totalUsers: number) => {
  return Math.ceil(totalUsers / Pagination.limit);
};
