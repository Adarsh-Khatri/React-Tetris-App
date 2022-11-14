import React from 'react';
import { StyledCell } from './styles/StyledCell'; //. refers to the current working directory
import { TETROMINOS } from '../tetrominos'; //.. refers to the parent directory of the current directory

// React.memo makes sure we only re-render the changed cells
// We've Destructured the props here and got the value of TETROMINOS object returning from tetrominos.js file

const Cell = ({ type }) => (
    <StyledCell type={type} color={TETROMINOS[type].color} > 
        {console.log('rerender cell')}
    </StyledCell>
);

export default React.memo(Cell);


