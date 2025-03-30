"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./page.module.css";

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("https://boxy-backend-kzfldfyyc-denis-projects-b5070b09.vercel.app/api/data")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Boxy</h1>
        <p className={styles.subtitle}>Скоро здесь появится ваши коробочки...</p>
        <button className={styles.button}>Добавить коробочку</button>
        {loading && <p>Загрузка...</p>}
        {error && <p className={styles.error}>Ошибка: {error}</p>}
        {data && <pre className={styles.data}>{JSON.stringify(data, null, 2)}</pre>}
      </main>
      <footer className={styles.footer}>
        <p>© 2025 Boxy. Все права защищены.</p>
      </footer>
    </div>
  );
}
