import React, { Component } from 'react';
import {
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import './App.css';
import Home from './Home';
import About from './About';
import Product from './Product';
import Contact from './Contact';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';

// class component
class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="nav">
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
          <NavLink to="/about" activeClassName="active">About</NavLink>
          <NavLink to="/product" activeClassName="active">Product</NavLink>
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </div>
        <Route render={({location}) => (
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    timeout={{
                        enter: 1000,
                        exit: 1000
                    }}
                    classNames="fade"
                >
                    <Switch location={location}>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/Product" component={Product}/>
                        <Route path="/Contact" component={Contact}/>
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        )} />

      </div>
    );
  }
}

export default App;
