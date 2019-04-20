/*Lastest Post on the Homepage */
import React from 'react';
import {Link} from 'react-router-dom';
import './css/Homepost.css';

const Homepost = ()=>{
  return(
    <section className="latest-post-wrap">
      <div className="section-header-wrap">
        <h3 className="section-header">LASTEST ARTICLES</h3>
      </div>
      <div className="latest-posts">
        <div className="posts">
          <div className="post-thumbnail">
            <Link to="/blog"><img src="" alt="quotes for freelance"/></Link>
          </div>
          <div className="post-meta">
            <p className="post-date">March 10, 2019</p>
            <h4 className="post-title"><Link to="/blog">Top 10 quotes for freelancers</Link></h4>
            <p className="post-exempt">Launchpad from Shopify Plus, makes all-nighters and exhausting manual website changes a thing of the past.</p>
          </div>
        </div>
        <div className="posts">
          <div className="post-thumbnail">
            <Link to="/blog"><img src="" alt="quotes for freelance"/></Link>
          </div>
          <div className="post-meta">
            <p className="post-date">March 20, 2019</p>
            <h4 className="post-title"><Link to="/blog">Top 10 quotes for freelancers</Link></h4>
            <p className="post-exempt">Launchpad from Shopify Plus, makes all-nighters and exhausting manual website changes a thing of the past.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Homepost;