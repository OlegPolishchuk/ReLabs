import {FetchUsersResponse} from "../types/types";

import {http} from "@/app/services/http";

export const fetchUsers = async (offset=0) => {
  try {
    const res = await http.fetchUsers(offset);
    const data: FetchUsersResponse = await res.json();

    return data;
  }
  catch (e) {
    console.log('Что-то не так в fetchUsers()', e);
    throw new Error('Что-то не так в fetchUsers()');
  }
}