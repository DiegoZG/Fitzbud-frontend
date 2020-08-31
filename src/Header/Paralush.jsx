import React, { useState, useEffect } from 'react'
import M from 'materialize-css'

const Paralush = () => {
    useEffect(() => {
        let elements = document.querySelectorAll('.parallax');
        M.Parallax.init(elements)
    }, [])

    return(
        <div className="parallax-container">
            <div className="parallax">
                <img className="responsive-img"src="https://i1.wp.com/www.quytech.com/blog/wp-content/uploads/2018/09/diet-plan-apps.jpg" alt="paralax_1"/>
            </div>
            <div className="section white">
                <h2> FitzBud </h2>
                <p> demo </p>
            </div>
        </div>
    )
}

export default Paralush