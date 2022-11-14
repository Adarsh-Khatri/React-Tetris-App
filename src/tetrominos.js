export const TETROMINOS = {
    0: {
        shape: [
            [0]
        ],
        color: '0, 0, 0'        //NO COLOR
    },
    I: {
        shape: [
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0]
        ],
        color:'0,255,255'       //CYAN 
    },
    J: {
        shape: [
            [0, 'J', 0],
            [0, 'J', 0],
            ['J', 'J', 0]
        ],
        color:'0,0,255'         //BLUE
    },
    L: {
        shape: [
            [0, 'L', 0],
            [0, 'L', 0],
            [0, 'L', 'L']
        ],
        color:'255,126,0'       //ORANGE
    },
    O: {
        shape: [
            ['O', 'O'],
            ['O', 'O']
        ],
        color:'255,255,0'       //YELLOW
    },
    S: {
        shape: [
            [0, 'S', 'S'],
            ['S', 'S', 0],
            [0, 0, 0]
        ],
        color:'0,255,0'         //GREEN
    },
    T: {
        shape: [
            ['T', 'T', 'T'],
            [0, 'T', 0],
            [0, 0, 0]
        ],
        color:'255,0,255'       //PURPLE
    },
    Z: {
        shape: [
            ['Z', 'Z', 0],
            [0, 'Z', 'Z'],
            [0, 0, 0]
        ],
        color: '255,0,0'        //RED
    },
};


// Here we've used the random function with the indexing of tetrominos for choosing the our Tetromino.

export const randomTetromino = () => {
    const tetrominos = 'IJLOSTZ';
    const randTetromino =
        tetrominos[Math.floor(Math.random() * tetrominos.length)];
    return TETROMINOS[randTetromino];
};