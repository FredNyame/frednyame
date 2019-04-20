import React from 'react';
import './css/Banner.css';

const Bannertext = (props)=>{
  const {headerText} = props;
  return (
    <div className="banner-text" id={`banner-textBanner.id`}>
      <h1 className="banner-header">{headerText.heading}</h1>
      <p className="tagline">{headerText.subHeading}<a href="mailto:nyamefred0@gmail.com?subject=Contact Email: (Your Subject Here)" className="cta"> {headerText.cta}</a></p>
    </div>
  )
}

export default Bannertext;