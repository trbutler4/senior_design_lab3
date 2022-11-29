import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from './layout.module.css'
import CommentSection from './CommentSection'

const Layout = ({ pageTitle, children }) => {

  return (
    <div className={container}>
      <header className={heading}></header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/mark" className={navLinkText}>
              Mark
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/thomas" className={navLinkText}>
              Thomas
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/jordyn" className={navLinkText}>
              Jordyn
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/tommy" className={navLinkText}>
              Tommy
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
        <CommentSection />
      </main>
    </div>
  )
}

export default Layout
