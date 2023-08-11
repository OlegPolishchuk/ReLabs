import cls from './page.module.css';

import { EventList } from '@/components/EventsList';
import { UsersList } from '@/components/UsersList';
import { fetchUsers } from '@/components/UsersList/utils/fetchUsers';

export default async function Home() {
  const usersData = await fetchUsers(0);

  return (
    <main className={cls.main}>
      <UsersList usersData={usersData} />
      <EventList />
    </main>
  );
}
