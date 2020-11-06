import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <Link to="/contact">Contact</Link>
    <a href="https://www.redbubble.com/people/thecodedose/shop" target="__blank">Store</a>
    <ThemeChanger/>
  </nav>
  
)