import React from 'react';
import './App.css';
import Login from './LoginSignUp/Login'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from './LoginSignUp/SignUp'
import Header from './Header/Header';
import { Parallax } from 'react-parallax';
import Main from './components/Main'
import EditForm from './components/EditForm'
import { MuiThemeProvider } from 'material-ui/styles';


const image1 = "https://i1.wp.com/www.quytech.com/blog/wp-content/uploads/2018/09/diet-plan-apps.jpg"



class App extends React.Component {
  
  render() {
  return (
   <BrowserRouter>
   <MuiThemeProvider>
  <div>

      <Header />
      <Parallax bgImage={ image1 } strength={600}> 
      <div style={{ height: 700}}>
        <div className="text-inside"> HTML </div>
      </div>
      </Parallax>
      <div style={{ height: '100vh' }}></div>
      <EditForm />

      <Switch>
          <Route exact path="/" component={Main} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />

      </Switch>
  </div>
  </MuiThemeProvider>
    </BrowserRouter>
  );
}
}

export default App;
