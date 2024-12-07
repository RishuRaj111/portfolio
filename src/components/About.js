import React from 'react'
import "./About.css"

import rishu from '../Assets/rishu.pdf'
import profile3 from "../Assets/profile 3.JPG"

const About = () => {
  return (
    <div className='About'>
        <div className="hero">
            <img src={profile3} alt="" />
        </div>
        <div className="intro">
            <h2>Hii I'm Rishu Raj</h2></div>
            <p>"Hi, I'm Rishu Raj, a passionate web developer with a love for crafting clean, user-friendly websites. I specialize in frontend technologies like React.js and am currently expanding my skills into backend development with Spring Boot and Java."</p>
          <br /> <p>I’m currently open to freelance opportunities, internships, or junior developer roles where I can contribute my skills and grow as a developer. My goal is to help create digital experiences that are not only functional but also engaging and user-centered."</p>
         <br />   <p>"Feel free to explore my projects on the portfolio page or get in touch with me for collaboration or any inquiries. Let’s create something amazing together!"</p>  
            <button><a href={rishu} download="rishu">Check Resume</a></button>
   
    </div>
  )
}

export default About