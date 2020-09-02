import React from 'react';

import SignIn from './LoginSignUp/SignIn'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from './LoginSignUp/SignUp'
import Header from './Header/Header';
import { Parallax } from 'react-parallax';
import Main from './components/Main'
import EditForm from './components/EditForm'
import { MuiThemeProvider } from 'material-ui/styles';
import FoodCaloriesShow from './components/FoodCaloriesShow'
import FoodsNew from './components/FoodsNew'
import FoodsShow from './components/FoodsShow'
import FoodsIndex from './components/FoodsIndex'
import injectTapEventPlugin from 'react-tap-event-plugin';

const App = () =>  {
  
  
  return (
   
   <MuiThemeProvider>
  <div>
  {/* {injectTapEventPlugin()} */}
      <Header />
      
      

      <Switch>
          <Route exact path="/" component={Main} />
          <Route path='/login' component={SignIn} />
          <Route path='/signup' component={Signup} />
          <Route path="/foods/new/:id" component={FoodCaloriesShow} />
          <Route path="/foods/new" component={FoodsNew} />
          <Route path="/foods/:id" component={FoodsShow} />
          <Route exact path="/foods" component={FoodsIndex} />

      </Switch>
  </div>
  </MuiThemeProvider>
    
  );

}

export default App;
