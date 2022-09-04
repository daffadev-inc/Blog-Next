import Head from 'next/head'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'

const name = '[Your Name]'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
    <div className={utilStyles.body_container}>
      <header className={utilStyles.header}>
        {home ? (
          <>
        <div className={utilStyles.navLeft}>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={40}
              width={40}
              alt={name}
            />
            <span className={utilStyles.heading2Xl}>{name}</span>
        </div>
        <div className={utilStyles.navRight}>
        </div>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={40}
                  width={40}
                  alt={name}
                />
              </a>
            </Link>
            <span className={utilStyles.heading2Xl}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </span>
          </>
        )}
      </header>
      <main className={utilStyles.container}>{children}</main>
      {!home && (
        <div className={utilStyles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
