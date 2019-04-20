import React from 'react';
import {connect} from 'react-redux';
import Banner from './Banner';
import Feature from './Feature';
// import Homepost from './Homepost';
import './css/Banner.css';

const Home = (props)=>{
  //get the bannerText array from the props
  const {bannerText} = props;
  //console.log(bannerText);

  return(
    <div className="container">
      <Banner textBanner={bannerText[0]}/>
      <Feature />
      {/* <Homepost /> */}
    </div>
  )
}

//map state to props
const mapStateToProps = (state) => {
  return {
    bannerText: state.bannerText
  }
}

//connect return a highr order component
export default connect(mapStateToProps)(Home);