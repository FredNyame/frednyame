import React from 'react';
import {Link} from 'react-router-dom';
import Ghsen from '../asserts/images/Gsenmobile.png';
import Alexhome from '../asserts/images/alexhomemockup.png';
import Dominion from '../asserts/images/screenhome.png';
import './css/Feature.css';

const Feature = (props)=>{
  return (
    <section className="feature-wrap">
      <div className="section-header-wrap">
        <h3 className="section-header">RECENT PROJECTS</h3>
      </div>
      <div className="featured-projects" id="featured1">
        <Link to='/0' className="feature-link">
          <div className="featured-images">
            <div className="desktop-size">
             <img src={Ghsen} alt="desktop size" />
            </div>
            <div className="feature-name">
             <h4 className="name-header">Ghana Soccer Education Network</h4>
             <p className="feature-service">Web Design / Web Development</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="featured-projects" id="featured2">
        <Link to='/1' className="feature-link">
          <div className="featured-images">
            <div className="desktop-size">
             <img src={Alexhome} alt="desktop size" />
            </div>
            <div className="feature-name">
              <h4 className="name-header">Global Elite</h4>
              <p className="feature-service">Web Design / Web Development</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="featured-projects" id="featured3">
        <Link to='/2' className="feature-link">
          <div className="featured-images">
            <div className="desktop-size">
             <img src={Dominion} alt="desktop size" />
            </div>
            <div className="feature-name">
             <h4 className="name-header">Dominion Church International</h4>
             <p className="feature-service">Web Design</p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}

export default Feature;