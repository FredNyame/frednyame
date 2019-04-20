import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Project from './components/Project';
import './components/css/Banner.css';

class App extends Component {
  //Function to show or hide the menu 
  handleNav = ()=>{
    const menu = document.querySelector('.menu-wrapper');
    //show the menu
    if(menu.className === 'menu-wrapper'){
      menu.classList.add('show');
      document.querySelector('.logo').classList.add('addColor');
      document.querySelector('.hamburger-icon').classList.add('change');
    } else{
      menu.classList.remove('show');
      document.querySelector('.logo').classList.remove('addColor');
      document.querySelector('.hamburger-icon').classList.remove('change');
    }
  }

  //detects when a an element within the container is click
  handleCloseLink = (e)=>{
    const menu = document.querySelector('.menu-wrapper');
    if(e.target.tagName === 'A' || e.target.tagName === 'svg' || e.target.tagName === 'path'){
      menu.classList.remove('show');
      document.querySelector('.logo').classList.remove('addColor');
      document.querySelector('.hamburger-icon').classList.remove('change');
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar handleNav={this.handleNav} handleCloseLink={this.handleCloseLink}/>
        </div>
        
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/blog' component={Blog} />
          <Route path='/:post_id' component={Project} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
