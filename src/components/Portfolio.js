import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Banner from './Banner';
import './css/Portfolio.css';
import Poster from '../asserts/images/poster.png';
import Shipping from '../asserts/images/shipping.png';
import Menu from '../asserts/images/menu.png';
import Gsen from '../asserts/images/Gsen-mockup.png';
import Church from '../asserts/images/church.png';
import Adinkra from '../asserts/images/adinkra.png';
import Xmas from '../asserts/images/xmas.png';
import XmasFull from '../asserts/images/Xmasv3.png';
import Ladcom from '../asserts/images/ladcom.png';

const Portfolio = (props)=>{
  //get the bannerText array from the props
  const {bannerText} = props;
  return(
    <div className="container">
      <Banner textBanner={bannerText[1]} newClass={'portfolio'}/>
      <div className="showcase-wrapper">
        <div className="showcase-items" onClick={(e)=>{
          //check if element has the modal class
          if(e.target.className === 'modal'){
            //show the modal
            document.querySelector('.modal-wrapper').style.display = 'block';
            //get dataset attribut value
            const imgSrc = e.target.dataset.url;
            document.querySelector('#modal-img').src = imgSrc;
          }
          }}>
        <div className="show-portfolio" id="gsen">
          <Link to={'/0'}><img src={Gsen} alt="gsen"/></Link>
        </div>
        <div className="show-portfolio" id="shipping">
          <Link to={'/1'}><img src={Shipping} alt="shipping"/></Link>
        </div>
        <div className="show-portfolio" id="church">
          <Link to={'/2'}><img src={Church} alt="Dominion"/></Link>
        </div>
        <div className="show-portfolio" id="email">
          <Link to={'/3'}><img src={Ladcom} alt="ladcom10 enterprise"/></Link>
        </div>
        <div className="show-portfolio" id="menu">
          <img src={Menu} alt="menu" className="modal" data-url={Menu}/>
        </div>
        <div className="show-portfolio" id="poster">
          <img src={Poster} alt="poster" className="modal" data-url={Poster}/>
        </div>
        <div className="show-portfolio" id="xmas">
          <img src={Xmas} alt="xmas" className="modal" data-url={XmasFull}/>
        </div>
        <div className="show-portfolio" id="andinkra">
          <img src={Adinkra} alt="" className="modal" data-url={Adinkra}/>
        </div>
        </div>
      </div>
      <div className="modal-wrapper" onClick={(e)=>{
        //when the div class is modalwrapper
        if(e.target.className === 'modal-wrapper'){
          document.querySelector('.modal-wrapper').style.display = 'none';
        }
        }}>
        <div className="modal-content">
          <img src="" alt="" id="modal-img"/>
        </div>
      </div>
    </div>
  )
}

//map state to props
const mapStateToProps = (state) => {
  return {
    bannerText: state.bannerText
  }
}

export default connect(mapStateToProps)(Portfolio);