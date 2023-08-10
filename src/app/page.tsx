import styles from './page.module.css'
import {getServerSession} from "next-auth";
import {authConfig} from "@/configs";
import Link from "next/link";
import {Routes} from "@/shared/constants";

export default async function Home() {
  const session = await getServerSession(authConfig);
  console.log('session =>', session)

  return (
    <>
      <header>
        <Link href={Routes.main}>Главная</Link>
        <Link href={Routes.login}>Авторизация</Link>
        <Link href={Routes.shop}>Авторизация</Link>
      </header>
      <main className={styles.main}>
        main page
      </main>
    </>
  )
}
