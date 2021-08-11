import React from 'react';
import Navbar from './Navbar';
import { Route, Switch } from 'react-router';
import Home from './Home';
import Contact from './Contact';
import User from './User';
import AboutUs from './AboutUs';
import Error from './Error';
import Search from './Search';




const App = () => {
  return (<>

    <Navbar />

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Contact" component={Contact} />
      <Route path="/User/:fname/:lname" component={User} />
      <Route path="/AboutUs" component={AboutUs} />
      <Route path="/Search" component={Search} />
      <Route component={Error} />
    </Switch>





  </>)
}
export default App;
