import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { MuiThemeProvider } from 'material-ui/styles'
import NavImage from './NavImage'





export default function Header() {
    // const [offsetY, setOffSetY] = useState(0)
    // const handleScroll = () => setOffSetY(window.pageYOffset)


    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll);

    //     return () => window.removeEventListener("scroll", handleScroll);
    // },[])



    return(
        <div>
            <header className="header">
		<h1 className="logo"><Link to="/">FitzBud</Link></h1>
      <ul className="main-nav">
          <li><a href="#">Track</a></li>
          <li><a href="#">Recipes</a></li>
          <li><a href="#">Blog</a></li>
          <li><Link to="/login"> Login </Link></li>
      </ul>
      
	</header> 
    
        </div>
      
    )
}

