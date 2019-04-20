import React from 'react';
import {Link} from 'react-router-dom';
import './css/Footer.css';

const Footer = ()=>{
  return(
    <footer className="container">
      <div className="footer-wrap">
        <div className="let-connect"><p className="let-p"><a href="mailto:nyamefred0@gmail.com?subject=Contact Email: (Your Subject Here)">LET’S WORK TOGETHER</a></p></div>
        <div className="city-love">Totally <span role="img" aria-label="love city">&#x1F499;</span> <span id="city">Buffalo!</span></div>
        <div className="social-wrapper">
          <a href="https://github.com/FredNyame" target='_blank' rel="noopener noreferrer" className="social" id="github">
            <svg xmlns="http://www.w3.org/2000/svg" width="26.532" height="25.869" viewBox="0 0 26.532 25.869"><path d="M8.874,28.83c0,.107-.123.193-.278.193-.177.016-.3-.07-.3-.193,0-.107.123-.193.278-.193C8.735,28.621,8.874,28.707,8.874,28.83Zm-1.664-.241c-.037.107.07.23.23.262a.251.251,0,0,0,.332-.107c.032-.107-.07-.23-.23-.278A.275.275,0,0,0,7.211,28.589ZM9.575,28.5c-.155.037-.262.139-.246.262.016.107.155.177.316.139s.262-.139.246-.246S9.73,28.482,9.575,28.5ZM13.095,8A12.827,12.827,0,0,0,0,21.052a13.411,13.411,0,0,0,9.067,12.8c.685.123.925-.3.925-.647,0-.332-.016-2.161-.016-3.284,0,0-3.744.8-4.531-1.594,0,0-.61-1.557-1.487-1.958,0,0-1.225-.84.086-.824a2.824,2.824,0,0,1,2.065,1.38,2.828,2.828,0,0,0,3.9,1.118,2.973,2.973,0,0,1,.856-1.8c-2.99-.332-6.007-.765-6.007-5.911A4.054,4.054,0,0,1,6.12,17.174a5.054,5.054,0,0,1,.139-3.632c1.118-.348,3.691,1.444,3.691,1.444a12.637,12.637,0,0,1,6.719,0s2.573-1.8,3.691-1.444a5.052,5.052,0,0,1,.139,3.632,4.158,4.158,0,0,1,1.38,3.151c0,5.162-3.151,5.574-6.141,5.911a3.163,3.163,0,0,1,.909,2.482c0,1.8-.016,4.033-.016,4.472,0,.348.246.77.925.647a13.288,13.288,0,0,0,8.976-12.785A13.116,13.116,0,0,0,13.095,8ZM5.2,26.45c-.07.053-.053.177.037.278.086.086.209.123.278.053.07-.053.053-.177-.037-.278C5.392,26.417,5.269,26.38,5.2,26.45Zm-.578-.433c-.037.07.016.155.123.209a.159.159,0,0,0,.23-.037c.037-.07-.016-.155-.123-.209C4.745,25.947,4.659,25.963,4.622,26.016Zm1.733,1.9c-.086.07-.053.23.07.332.123.123.278.139.348.053.07-.07.037-.23-.07-.332C6.585,27.851,6.424,27.835,6.355,27.921Zm-.61-.786c-.086.053-.086.193,0,.316s.23.177.3.123a.244.244,0,0,0,0-.332C5.97,27.118,5.831,27.065,5.745,27.134Z" transform="translate(0 -8)"/></svg>
          </a>
          <a href="https://www.instagram.com/citylightonline/" target='_blank' rel="noopener noreferrer" className="social" id="insta">
            <svg xmlns="http://www.w3.org/2000/svg" width="25.723" height="25.717" viewBox="0 0 25.723 25.717"><path d="M12.789,38.09a6.594,6.594,0,1,0,6.594,6.594A6.583,6.583,0,0,0,12.789,38.09Zm0,10.88a4.287,4.287,0,1,1,4.287-4.287,4.294,4.294,0,0,1-4.287,4.287Zm8.4-11.15a1.538,1.538,0,1,1-1.538-1.538A1.534,1.534,0,0,1,21.19,37.82Zm4.367,1.561a7.611,7.611,0,0,0-2.077-5.388,7.661,7.661,0,0,0-5.388-2.077c-2.123-.121-8.487-.121-10.61,0a7.65,7.65,0,0,0-5.388,2.072A7.636,7.636,0,0,0,.015,39.375c-.121,2.123-.121,8.487,0,10.61a7.611,7.611,0,0,0,2.077,5.388,7.671,7.671,0,0,0,5.388,2.077c2.123.121,8.487.121,10.61,0a7.611,7.611,0,0,0,5.388-2.077,7.661,7.661,0,0,0,2.077-5.388C25.678,47.863,25.678,41.5,25.557,39.381ZM22.814,52.264a4.34,4.34,0,0,1-2.445,2.445c-1.693.671-5.71.516-7.581.516s-5.893.149-7.581-.516a4.34,4.34,0,0,1-2.445-2.445c-.671-1.693-.516-5.71-.516-7.581S2.1,38.79,2.764,37.1a4.34,4.34,0,0,1,2.445-2.445c1.693-.671,5.71-.516,7.581-.516s5.893-.149,7.581.516A4.34,4.34,0,0,1,22.814,37.1c.671,1.693.516,5.71.516,7.581S23.486,50.577,22.814,52.264Z" transform="translate(0.075 -31.825)"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/fred-nyame-208aa5ba/" target='_blank' rel="noopener noreferrer" className="social" id="linkendin">
            <svg xmlns="http://www.w3.org/2000/svg" width="25.5" height="25.494" viewBox="0 0 25.5 25.494"><path d="M5.708,25.494H.421V8.473H5.708ZM3.062,6.152a3.076,3.076,0,1,1,3.062-3.09A3.087,3.087,0,0,1,3.062,6.152ZM25.494,25.494H20.219V17.209c0-1.975-.04-4.507-2.749-4.507-2.749,0-3.17,2.145-3.17,4.365v8.428H9.02V8.473h5.07V10.8h.074a5.555,5.555,0,0,1,5-2.749c5.349,0,6.334,3.523,6.334,8.1v9.35h-.006Z"/></svg>
          </a>
          <a href="https://www.behance.net/nyamefred" target='_blank' rel="noopener noreferrer" className="social" id="behance">
           <svg xmlns="http://www.w3.org/2000/svg" width="37.381" height="23.434" viewBox="0 0 37.381 23.434"><path d="M15.056,85.9A4.925,4.925,0,0,0,18.2,81.1c0-4.582-3.414-5.7-7.353-5.7H0v23H11.149c4.179,0,8.106-2.005,8.106-6.678C19.255,88.834,17.886,86.7,15.056,85.9Zm-10-6.574H9.8c1.824,0,3.466.513,3.466,2.628,0,1.953-1.278,2.739-3.083,2.739H5.056V79.326Zm5.406,15.166H5.056V88.159h5.51c2.226,0,3.634.928,3.634,3.284,0,2.323-1.681,3.05-3.738,3.05ZM33.727,78.872H24.4V76.607h9.326Zm3.654,11.441c0-4.926-2.881-9.034-8.106-9.034-5.075,0-8.521,3.816-8.521,8.813,0,5.185,3.264,8.742,8.521,8.742,3.978,0,6.555-1.791,7.794-5.6H33.033c-.435,1.421-2.226,2.174-3.615,2.174-2.68,0-4.089-1.571-4.089-4.238H37.342C37.361,90.9,37.381,90.605,37.381,90.313ZM25.336,88.289a3.574,3.574,0,0,1,3.8-3.556c2.3,0,3.453,1.35,3.647,3.556Z" transform="translate(0 -75.4)"/></svg>
          </a>
          <Link to="/" className="social" id="dribbble">
           <svg xmlns="http://www.w3.org/2000/svg" width="24.446" height="24.446" viewBox="0 0 24.446 24.446"><path d="M20.223,8A12.223,12.223,0,1,0,32.446,20.223,12.237,12.237,0,0,0,20.223,8ZM28.3,13.637a10.391,10.391,0,0,1,2.358,6.5,24.4,24.4,0,0,0-7.27-.336c-.284-.692-.551-1.3-.918-2.051a13.907,13.907,0,0,0,5.83-4.117Zm-1.161-1.207A11.788,11.788,0,0,1,21.672,16.2a55.729,55.729,0,0,0-3.9-6.112A10.413,10.413,0,0,1,27.144,12.429Zm-11.36-1.639a66.617,66.617,0,0,1,3.871,6.038A38.943,38.943,0,0,1,10,18.1,10.479,10.479,0,0,1,15.784,10.791Zm-6,9.448c0-.107,0-.213.005-.319a38.513,38.513,0,0,0,10.73-1.486c.3.585.584,1.179.846,1.772a16.172,16.172,0,0,0-8.9,7.014A10.4,10.4,0,0,1,9.783,20.239Zm4.032,8.236c1.091-2.229,4.05-5.107,8.259-6.543A43.4,43.4,0,0,1,24.3,29.85,10.419,10.419,0,0,1,13.815,28.476Zm12.242.418a45.061,45.061,0,0,0-2.028-7.444,15.324,15.324,0,0,1,6.5.446A10.459,10.459,0,0,1,26.057,28.894Z" transform="translate(-8 -8)"/></svg>
          </Link>
      </div>
      </div>
    </footer>
  )
}

export default Footer;