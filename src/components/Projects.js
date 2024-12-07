import React from 'react'
import './Project.css'
import Card from './Card'
import assistant from '../Assets/virtual assistant.avif'
import weather from '../Assets/weather image.jpeg'
import chillflix from '../Assets/chillflix.jpg'
import tictactoe from '../Assets/tic tac toe.jpeg'
import texter from '../Assets/Texter.jpg'
import simon from '../Assets/simon.jpeg'

const Projects = () => {
    const projectList = [
        {
          id: 1,
          title: 'Virtual Assistant',
          description: 'A web based virtual assistant able to interact with user via voice.',
          image: assistant, 
          link:'https://rishuraj111.github.io/tisel-assistant/'
        },
        {
          id: 2,
          title: 'Weather App',
          description: 'Web-based weather app with a simple UI that provides temperature, humidity, and wind speed information.',
          image: weather,
          link:'https://reliable-caramel-e31b1f.netlify.app/'
        },
        {
          id: 3,
          title: 'Chillflix ',
          description: 'Netflix clone with simple UI and authentication using firebase.',
          image: chillflix,
         link: 'https://scintillating-blini-0ce883.netlify.app/', // Add the link here
        },
        {
          id: 4,
          title: 'Tic tac toe',
          description: 'A 2-player game to align three Xs or Os in a 3x3 grid, with win detection and reset.',
          image: tictactoe,
          link:'https://rishuraj111.github.io/tic-tac-toe/'
        },
        {
          id: 5,
          title: 'Texter',
          description: 'A tool for copying, word count, and toggling text styles like uppercase or alternating letters.',
          image: texter,
          link:'https://aesthetic-sprite-d813e2.netlify.app/'
        },
        {
          id: 6,
          title: 'Simon Game',
          description: 'A Simon game that challenges players to repeat an increasingly complex sequence of colors and sounds.',
          image: simon,
          link:'https://rishuraj111.github.io/Simon-Game/'
        },
      ];
  return (
    <div className='project'>
       {projectList.map((project) => (
        <Card 
          key={project.id} 
          title={project.title} 
          description={project.description} 
          image={project.image} 
          link={project.link}
        />
      ))}
    </div>
  )
}

export default Projects