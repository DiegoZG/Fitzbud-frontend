import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'




export default function() {
    // const [offsetY, setOffSetY] = useState(0)
    // const handleScroll = () => setOffSetY(window.pageYOffset)


    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll);

    //     return () => window.removeEventListener("scroll", handleScroll);
    // },[])



    return(
        <div>
            <header className="header">
		<h1 className="logo"><a href="#">FitzBud</a></h1>
      <ul className="main-nav">
          <li><a href="#">Track</a></li>
          <li><a href="#">Recipes</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Log in</a></li>
      </ul>
	</header> 
        </div>
    )
}