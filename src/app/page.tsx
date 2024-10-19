export const dynamic = "force-static";
export const dynamicParams = false;

import Image from "next/image";
import styles from "./page.module.css";
import CurrentTime from "./(components)/CurrentTime";
import RevalidateButton from "./(components)/RevalidateButton";



export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <CurrentTime id="1" />
        <CurrentTime id="2" />
        
       <RevalidateButton />
      </main>
    </div>
  );
}
