import React, {  useRef } from 'react';
import './Card.css';


const Card = ({ title, description, image,link }) => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        const { clientX, clientY } = e;
        const { left, top, width, height } = card.getBoundingClientRect();
        
        // Calculate the center of the card
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        // Calculate the angle
        const deltaX = clientX - centerX;
        const deltaY = clientY - centerY;

        // Calculate the tilt effect
        const tiltX = (deltaY / height) * 30; // Adjust the 10 for more or less tilt
        const tiltY = -(deltaX / width) * 30;

        // Apply the transformation
        card.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    };

    const handleMouseLeave = () => {
        // Reset the transform when the mouse leaves
        cardRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
    };

    return (
        <div
            className="card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={cardRef}
        >
            <img src={image} alt="" />
            <div className="card-body">
                <h3 className='card-title'>{title}</h3>
                <p className='card-text'>{description}</p>
            </div>
            <div className="card-footer">
                <a href={link} target='_blank' rel='noreferrer' className="btn">Learn More</a>
            </div>
        </div>
    );
};

export default Card;



// here in card.js we will write href={link} and we will alsorecieve the link in props