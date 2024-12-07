import React, { useEffect } from 'react';
import './HexagonBackground.css';

const HexagonBackground = () => {
    useEffect(() => {
        const hexagons = document.querySelectorAll('.hexagon');

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;

            hexagons.forEach((hexagon) => {
                const rect = hexagon.getBoundingClientRect();
                const hexCenterX = rect.left + rect.width / 2;
                const hexCenterY = rect.top + rect.height / 2;

                // Calculate the distance from the mouse to the hexagon's center
                const deltaX = clientX - hexCenterX;
                const deltaY = clientY - hexCenterY;
                const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

                // Apply a subtle hover effect based on distance
                const effectStrength = Math.max(0, 150 - distance) / 150; // Adjust this to make it more or less sensitive
                hexagon.style.transform = `scale(${1 + effectStrength * 0.1})`;
                hexagon.style.boxShadow = `0px 0px ${20 * effectStrength}px rgba(255, 255, 0, ${effectStrength})`;
            });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="hexagon-background">
            {/* Render hexagons */}
            {Array.from({ length: 30 }).map((_, i) => (
                <div key={i} className="hexagon"></div>
            ))}
        </div>
    );
};

export default HexagonBackground;
