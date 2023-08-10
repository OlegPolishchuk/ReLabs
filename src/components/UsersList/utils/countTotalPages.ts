import {Pagination} from "@/shared/constants/pagination";

export const countTotalPages = (totalUsers: number) => {
  console.log(totalUsers)
  return Math.ceil(totalUsers / Pagination.limit)
}