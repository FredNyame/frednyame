import React from 'react';
import { Link } from 'react-router-dom';
import './css/Button.css';

const Button = (props)=>{
  const {btnText} = props;
  return(
    <div className="btn-wrapper">
     <Link to="/portfolio" className="btn btn-color">
        {btnText}
     </Link>
    </div>
  )
}

export default Button;