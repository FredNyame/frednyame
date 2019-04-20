import React from 'react';
import {Link} from 'react-router-dom';
import Bannertext from './Bannertext';
import './css/Banner.css';
import Github from '../asserts/images/github.svg';
import insta from '../asserts/images/instagram.svg';
import Linkedin from '../asserts/images/linkedin.svg';
import Behance from '../asserts/images/behance.svg';
import Dribble from '../asserts/images/dribbble.svg';
import Button from './Button';
import ArrowDown from '../asserts/images/arrow-down.svg';

const Banner = (props)=>{
  const {textBanner} = props;
  
  return (
    <header className="header-wrapper" id={ props.newClass ? props.newClass : 'default'}>
     <div className="container">
      <Bannertext headerText={textBanner}/>
      <Button btnText="See Projects"/>
      <div className="arrow-down">
        <img src={ArrowDown} alt="arrow-down" id="arrow-down"/>
      </div>
     </div>
     <div className="social-wrapper container">
        <a href="https://github.com/FredNyame" className="social" id="github">
         <img src={Github} alt="github"/>
        </a>
        <a href="https://www.instagram.com/citylightonline/" target='_blank' rel="noopener noreferrer" className="social" id="insta">
         <img src={insta} alt="instagram"/>
        </a>
        <a href="https://www.linkedin.com/in/fred-nyame-208aa5ba/" target="_blank" rel="noopener noreferrer" className="social" id="linkendin">
         <img src={Linkedin} alt="linkedin"/>
        </a>
        <a href="https://www.behance.net/nyamefred" target='_blank' rel="noopener noreferrer" className="social" id="behance">
         <img src={Behance} alt="behance"/>
        </a>
        <Link to="/" className="social" id="dribbble">
         <img src={Dribble} alt="dribble"/>
        </Link>
      </div>
    </header>
  )
}

export default Banner;