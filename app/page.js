import Link from 'next/link';
import styles from './page.module.css';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout title="Home">
      <main className={styles.main}>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <img src="/edit.jpg" alt="Edit Images" className={styles.cardImage} />
            </div>
            <Link href="/image">
              <button className={styles.cardButton}>Edit Images</button>
            </Link>
          </div>
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <img src="/bw.png" alt="Black and White" className={styles.cardImage} />
            </div>
            <Link href="/bg">
              <button className={styles.cardButton}>Convert to Black and White</button>
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
