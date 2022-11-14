import { useState, useEffect, useCallback } from 'react';

export const useGameStatus = rowsCleared => {
    const [score, setScore] = useState(0);
    const [rows, setRows] = useState(0);
    const [level, setLevel] = useState(0);
    const [hiScore, setHiScore] = useState(localStorage.getItem('hiScore'));

    const linePoints = [40, 100, 300, 1200];

    const calcScore = useCallback(() => {
        // We have score
        if (rowsCleared > 0) {
            // This is how original Tetris score is calculated
            setScore(prev => prev + linePoints[rowsCleared - 1] * (level + 1));
            setRows(prev => prev + rowsCleared);
        }
        if (score > Number(hiScore)) {
            localStorage.setItem('hiScore', score);     
            setHiScore(score);
        }
    }, [score, level, linePoints, rowsCleared,hiScore]);

    useEffect(() => {
        calcScore();
    }, [calcScore, rowsCleared, score, hiScore]);

    return [score, setScore, rows, setRows, level, setLevel, hiScore];
};