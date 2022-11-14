import React, { useState } from 'react';

import { createStage, checkCollision } from '../gameHelpers';
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';

// Custom Hooks
import { useInterval } from '../hooks/useInterval';
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import { useGameStatus } from '../hooks/useGameStatus';

// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

// Function Component 
const Tetris = () => {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
    const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
    const [score, setScore, rows, setRows, level, setLevel,hiScore] = useGameStatus(
        rowsCleared
    );

    console.log('RE-RENDERING TETRIS COMPONENT');

    const movePlayer = dir => {
        if (!checkCollision(player, stage, { x: dir, y: 0 })) {
            updatePlayerPos({ x: dir, y: 0 });
        }
    };

    const keyUp = ({ keyCode }) => {
        if (!gameOver) {
            // Activate the interval again when user releases down arrow.
            if (keyCode === 40) {
                setDropTime(1000 / (level + 1));
            }
        }
    };

    const startGame = () => {
        // Reset everything
        setStage(createStage());
        setDropTime(1000);
        resetPlayer();
        setScore(0);
        setLevel(0);
        setRows(0);
        setGameOver(false);
    };
    const drop = () => {
        // Increase level when player has cleared 10 rows
        if (rows > (level + 1) * 10) {
            setLevel(prev => prev + 1);
            // Also increase speed
            setDropTime(1000 / (level + 1) + 200);
        }

        if (!checkCollision(player, stage, { x: 0, y: 1 })) {
            updatePlayerPos({ x: 0, y: 1, collided: false });
        } else {
            // Game over!
            if (player.pos.y < 1) {
                setGameOver(true);
                setDropTime(null);
            }
            updatePlayerPos({ x: 0, y: 0, collided: true });
        }
    };

    const dropPlayer = () => {
        // We don't need to run the interval when we use the arrow down to
        // move the tetromino downwards. So deactivate it for now.
        setDropTime(null);
        drop();
    };

    // This one starts the game
    // Custom hook by Dan Abramov
    useInterval(() => {
        drop();
    }, dropTime);

    const move = ({ keyCode }) => {
        if (!gameOver) {
            if (keyCode === 37) { // Left Arrow Key
                movePlayer(-1);
            } else if (keyCode === 39) { // Right Arrow Key
                movePlayer(1);
            } else if (keyCode === 40) { // Down Arrow Key
                dropPlayer();
            } else if (keyCode === 38) { // Up Arrow Key
                playerRotate(stage, 1);
            }
        }
    };

    return (
        <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)} onKeyUp={keyUp} >
            <StyledTetris>
                <Stage stage={stage} />
                <aside>
                    {gameOver ? (<Display gameOver={gameOver} text="Game Over"/>) :
                     (<div >
                        <Display text={`Hi-Score: ${Number(hiScore)}`} />
                        <Display text={`Score: ${score}`} />
                        < Display text={`Rows: ${rows}`} />
                        <Display text={`Level: ${level}`} />
                    </div >)}
                    < StartButton callback={startGame} />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    );
};
export default Tetris;