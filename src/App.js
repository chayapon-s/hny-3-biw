import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Search from './components/pages/Search/Search';
import SignUp from './components/pages/SignUp/SignUp';
import AddData from './components/pages/AddData/AddData';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <iframe width="10" height="10" src="https://www.youtube.com/embed/m__oafvzDg0?start=57&autoplay=1&enablejsapi=1" allow="autoplay" frameborder="0" ></iframe>
      <Switch>
      <Route path='/anniversary' exact component={Home} />
      </Switch>

      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
    </Router>
    
  );
}

export default App;
