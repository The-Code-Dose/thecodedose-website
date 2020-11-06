import React from "react"
import { StaticQuery, graphql } from "gatsby"
import TwitterIcon from '../images/twitter.svg'
import InstagramIcon from '../images/instagram.svg'
import RedBubbleIcon from '../images/redbubble.svg'

import './socialLinks.scss'

export default () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            social {
              instagram
              twitter
              redbubble
            }
          }
        }
      }
    `}
    render={({ site: { siteMetadata: { social: { instagram, redbubble, twitter }}}}) => (
      <div className="social-links__container">
      <a href={instagram} target="__blank">
        <img src={InstagramIcon} className="social-links__icon" alt="instagram" />
      </a>
      <a href={twitter} target="__blank">
        <img src={TwitterIcon} className="social-links__icon" alt="twitter" />
      </a>
      <a href={redbubble} target="__blank">
        <img src={RedBubbleIcon} className="social-links__icon" alt="redbubble" />
      </a>
    </div>
    )}
  />
)
