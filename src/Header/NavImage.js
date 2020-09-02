import React from 'react'
import { Parallax } from 'react-parallax';
import { autofill } from 'redux-form';

const image1 = "https://i1.wp.com/www.quytech.com/blog/wp-content/uploads/2018/09/diet-plan-apps.jpg"
const image2 = "https://nycnewswire.com/wp-content/uploads/2018/11/foods.jpg"
const image3 = "https://images4.alphacoders.com/805/thumb-1920-805233.jpg"


const inlineStyle = {
    left: '50%',
    top: '50%',
    position: 'absolute',
    padding: '20px',
    transform: 'translate(-50%, -50%)',
  }

  const imageStyle = {
    
    display: 'block',
    rightmargin: 'auto',
    leftmargin: 'auto',
    topmmargin: '200px'
  }
  

function NavImage() {

return(
    <div>
      <Parallax bgImage={ image1 } strength={800} blur={3} bgStyle={imageStyle}> 
      <div style={{ height: 700  }}>
        <div style={inlineStyle}><h1>Welcome</h1> </div>
      </div>
      </Parallax>
      <div style={{ height: '50vh' }}></div>
      
      </div>
)
    }

    export default NavImage