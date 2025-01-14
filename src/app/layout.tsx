import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import style from "./layout.module.scss";

export const metadata: Metadata = {
  title: "UNI-SIZE",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div className={style.container}>
          <header>
            <Link href={"/"}>UNI-SIZE</Link>
          </header>
          <main className={style.main_container}>
            <nav>
              <ul className={style.main_container_first_category}>
                <li>
                  <Link href={"/school"}>학교</Link>
                  <ul className={style.main_container_second_category}>
                    <li>
                      <Link href={"/school"}>학교조회</Link>
                    </li>
                    <li>
                      <Link href={"/school/add"}>학교등록</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href={"/student"}>학생</Link>
                  <ul className={style.main_container_second_category}>
                    <li>
                      <Link href={"/student"}>학생조회</Link>
                    </li>
                    <li>
                      <Link href={"/student/add"}>학생등록</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <div className={style.main__container__children}> {children}</div>
          </main>
          <footer>ss</footer>
        </div>
      </body>
    </html>
  );
}
