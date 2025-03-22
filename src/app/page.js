import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Boxy</h1>
        <p className={styles.subtitle}>Скоро здесь появится ваши коробочки...</p>
        <button className={styles.button}>Добавить коробочку</button>
      </main>
      <footer className={styles.footer}>
        <p>© 2025 Boxy. Все права защищены.</p>
      </footer>
    </div>
  );
}