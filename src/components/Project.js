/*Class based Component */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './css/Project.css';

class Project extends Component {
  // state = {
  //   portfolioimages: null
  // }

  render(){
    let id = this.props.match.params.post_id;
    
    //receive the return object from the mapStateToProse funtion
    const {portfolioimages} = this.props;
    const singleProject = portfolioimages[id];
    //console.log(singleProject);

    return(
      <div className="single-project container">
        <div className="banner-text" id={`banner-textBanner.id`}>
          <h1 className="banner-header">{singleProject.title}</h1>  
          { singleProject.site ? 
            <div className="link-wrapper">
              <Link to={'/'}>View on Github</Link> 
              <a href={singleProject.site} target='_blank' rel="noopener noreferrer">Visit Site</a>
            </div> 
            : '' 
          }
        </div>
        <div className="home-page">
          <img src={singleProject.titleImage} alt="Homepage"/>
        </div>
        <div className="view-on-service">
          <div className="service-wrap">
            <h4 className="service-header">Services</h4>
            <p>{singleProject.firstService}</p>
            <p>{singleProject.secondService}</p>
          </div>
          <div className="service-overview">
            <h4 className="project-header">Starting Point</h4>
            <p>{singleProject.starting}</p>
          </div>
        </div>
        {
          singleProject.logo ? 
            <div className="project-logo-wrapper">
              <img src={singleProject.logo} alt="project-logo"/>
            </div>
            : ''
        }
        { 
          singleProject.summary ? 
            <div className="summary-wrapper">
              <h4 className="project-header">What I did part here</h4>
              <p>{singleProject.summary}</p>
            </div>
            : ''
        }
        <div className="home-screen-wrapper">
          <img src={singleProject.homePage} alt="home-screen"/>
        </div>

       { 
         singleProject.mobile ?
         <div>
          <div className="mobile-info-wrapper">
            <h4 className="project-header">Mobile First</h4>
            <p>{singleProject.mobile}</p>
          </div>
          <div className="mobile-screen-wrapper">
            <img src={singleProject.phone} alt="mobile-screen"/>
          </div>
         </div>
          : ''
        }
      </div>
    )
  }
}

//map state to props
const mapStateToProps = (state, ownProps) => {
  
  return {
    portfolioimages: state.portfolioimages
  }
}

export default connect(mapStateToProps)(Project);