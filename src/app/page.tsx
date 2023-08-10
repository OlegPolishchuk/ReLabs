import clsx from "clsx";

import cls from './page.module.css'

import {Header} from "@/components/Header/Header";
import {UsersList} from "@/components/UsersList/ui/UsersList";
import {fetchUsers} from "@/components/UsersList/utils/fetchUsers";

export default async function Home() {
  const usersData = await fetchUsers(0);
  
  return (
    <>
      <Header />

      <main className={clsx(cls.main)}>
        <UsersList  usersData={usersData}/>
      </main>
    </>
  )
}
