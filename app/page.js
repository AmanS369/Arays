
import Link from 'next/link'
import styles from './page.module.css'
import Layout from '@/components/Layout'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
       <Layout title="Home">
          <Link href="/image">
          <button className='btn btn-primary'>EDIT IMAGES</button>
          </Link>
       </Layout>
      </div>
    </main>
  )
}
