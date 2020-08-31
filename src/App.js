import React from 'react';
import './App.css';
import Login from './LoginSignUp/Login'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from './LoginSignUp/SignUp'
import Header from './Header/Header';
import { Parallax } from 'react-parallax';


const image1 = "https://i1.wp.com/www.quytech.com/blog/wp-content/uploads/2018/09/diet-plan-apps.jpg"

const inLineStyle = {
  // background: '#fff',
  left: '50%',
  top: '50%',
  position: 'absolute',
  padding: '20px',
  transform: 'translate(-50%, -50%)'
}

class App extends React.Component {
  
  render() {
  return (
   <BrowserRouter>
  
    <div>
      <Header />
      <Parallax bgImage={ image1 } strength={600}> 
      <div style={{ height: 700}}>
        <div style={inLineStyle}> HTML </div>
      </div>
      </Parallax>
      <div style={{ height: '100vh' }}></div>
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />
    </div>
    
    </BrowserRouter>
  );
}
}

export default App;
