import React, { useState } from 'react';
import "./Home.css";

import profile2 from "../Assets/proflie color.jpg"
import profile4 from '../Assets/img-black.jpg'


import Projects from './Projects';
import { Typewriter } from 'react-simple-typewriter'
import rishu from '../Assets/rishu.pdf'

const Home = React.forwardRef((props, ref) => { // Use forwardRef to forward the ref
  const [isHovered, setIsHovered] = useState(false);

  const handleType = (count) => {
    // access word count number
    console.log(count)
  }


  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }

  return (
    <div className='home'>
      <div className="hero">
        <div className="hero-left">
          <h1>Hi, There</h1>
          <p className='hero-main'>I am <span style={{ color: 'red', fontWeight: 'bold' }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={['Rishu Raj', 'Full Stack Developer', 'Programmer', 'Web Designer',]}
              loop={5}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              onLoopDone={handleDone}
              onType={handleType}
            />
          </span></p>
          <p className='desc'>
            "Enthusiastic fresher web developer with expertise in HTML, CSS, JavaScript, and a hunger to explore frameworks like React
            and Node.js. Backed by a solid academic grounding in Bachelor Of Computer Applications, adept at crafting responsive
            websites and debugging code. Committed to staying updated with industry trends, I bring a strong eye for detail and a
            passion for problem-solving. Eager to collaborate on innovative projects, contribute creatively, and expand my skill set. With
            a dedication to continuous learning and growth, I am excited to embark on a fulfilling journey in the dynamic realm of web
            development."
          </p>
          <button><a href={rishu} download="rishu">Check Resume</a></button>
        </div>
        <div className="hero-right">
          <img
            src={isHovered ?profile4  : profile2}
            alt="Narendra Modi"
            className='hover-image'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ width: '200px', height: '300px', objectFit: 'cover' }}
          />
        </div>
      </div>
      <div ref={ref} style={{ paddingTop: '60px' }}>
        <h2 className='project-heading'>Projects</h2>
        <Projects />
      </div>
    </div>
  );
});

export default Home;
