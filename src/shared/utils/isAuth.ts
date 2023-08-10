import { getServerSession } from 'next-auth';

export const isAuth = async () => {
  const session = await getServerSession();
  return session?.user?.email;
};
