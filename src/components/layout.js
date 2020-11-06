import React from "react"
import SocialLinks from './socialLinks'
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
        <SocialLinks />
        <p>&copy; {new Date().getFullYear()} &bull; Crafted with <span role="img" aria-label="love">❤️</span> by The Code Dose</p>
      </footer>
    </div>
  )
}
