import React from 'react';
import { StyledDisplay } from './styles/StyledDisplay';

// We've Destructured the props here
const Display = ({ gameOver, text }) => ( <
    StyledDisplay gameOver = { gameOver } > { text } < /StyledDisplay>
);

export default Display;