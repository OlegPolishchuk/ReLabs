import {Pagination} from "@/shared/constants/pagination";

const {limit} = Pagination;
export const http = {
  async fetchUsers( offset:number) {
    return fetch(`https://test.relabs.ru/api/users/list?limit=${limit}&offset=${offset}`)
  }
}