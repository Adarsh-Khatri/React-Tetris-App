import React from 'react';
import { StyledStage } from './styles/StyledStage';

import Cell from './Cell';

// We've Destructured the props of array [20x12] here
const Stage = ({ stage }) => (
    // width = 12 height = 20
    <StyledStage width={stage[0].length} height={stage.length}>
        {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]}/>))}
    </StyledStage>
);

export default Stage;