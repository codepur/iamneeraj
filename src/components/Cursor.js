import React, { useState, useEffect } from 'react';

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorType, setCursorType] = useState('default');

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseover', handleMouseOver);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    const handleMouseMove = event => {
        setMousePosition({ x: event.clientX, y: event.clientY });
    };
    const handleMouseOver = event => {
        if (event.target.classList.contains('link')) {
            setCursorType('pointer');
        } else {
            setCursorType('default');
        }
    };

    return (
        <div
            style={{
                position: 'fixed',
                top: mousePosition.y,
                left: mousePosition.x,
                width: '23px',
                height: '23px',
                border:"2px solid whitesmoke",
                backgroundColor: '#39b54a',
                opacity: 0.3,
                borderRadius: '50%',
                transform: 'translate(-50%, -50%)',
                transition: 'all 0.1s linear',
                zIndex: 999,
                pointerEvents: 'none'
            }}
            className='custom-cursor'
        />
    );
};

export default Cursor;