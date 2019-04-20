import React from 'react';
import Button from './Button';
import Profile from '../asserts/images/profilepic.png'
import './css/About.css';

const About = ()=>{
  return(
    <div className="container">
      <div className="about-wrapper">
        <div className="about-details">
          <h1>Welcome</h1>
          <p>I’m Fred, a front-end developer and UI designer based in Buffalo, New York. I grew up mostly in Ghana and studied computer science in college. I love working on projects that involve versatile skill sets in solving complex problems that helps improve the lives of people. I’m currently a freelance developer and designer.</p>
          <p>Thinking about solutions based on the user experience through the use of design and technology is among the best things I love about what I do. I find internal systematic struggles intriguing and set to solve and improve processes to better the way people work and interact with technology. Through merging experience in web technologies and UI design, I can better approach problems for modern overarching solutions.</p>
          <p>When I’m not working on code and designs for the next project, I spend time coaching soccer and also volunteer to help student-athlete in Ghana study for their SAT exams. Besides that you’ll find me spending time with my family.</p>
          <p>I’ve committed myself to continuous learning and honing my skills to solve challenging problems. I’m always open to new opportunities to learn, grow, and contribute. If you feel you have the right opportunity, let’s chat!</p>
          <Button btnText="Résumé"/>
        </div>
        <div className="about-profile-pic">
          <img src={Profile} alt="Fred Nyame"/>
        </div>
      </div>
    </div>
  )
}

export default About;