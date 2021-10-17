
const piece = (piece, x, y) => {
    const pieces = {
        'square': {
            coords: [[x, y], [x+1 , y], [x+1, y+1], [x, y+1]],
            name: 'square',
            spawn: Math.floor(Math.random() * 11),
            border: {right: 2, bottom: 2},
            number: 1
        },
        'long': {
            coords: [[x, y], [x, y+1], [x, y+2], [x, y+3]],
            name: 'long',
            spawn: Math.floor(Math.random() * 9),
            border: {right: 1, bottom: 3},
            number: 2
        }, 
        "t-shape": {
            coords: [[x, y], [x+1, y+1], [x, y+2], [x, y+1]],
            name: 't-shape',
            spawn: Math.floor(Math.random() * 11),
            border: {right: 2, bottom: 2},
            number: 3
        }, 
        "l": {
            coords: [[x, y], [x+1, y], [x+1, y+1], [x+1, y+2]],
            name: 'l',
            spawn: Math.floor(Math.random() * 11),
            border: {right: 2, bottom: 2},
            number: 4
        },
        "j": {
            coords: [[x, y], [x, y+1], [x+1, y+1], [x+2, y+1]],
            name: 'j',
            spawn: Math.floor(Math.random() * 10),
            border: {right: 3, bottom: 2},
            number: 5
        },
        "z": {
            coords: [[x, y], [x+1 , y], [x+1, y+1], [x+2, y+1]],
            name: 'z',
            spawn: Math.floor(Math.random() * 10),
            border: {right: 3, bottom: 2},
            number: 6
        },
        "s": {
            coords: [[x, y], [x , y+1], [x+1, y+1], [x+1, y+2]],
            name: 's',
            spawn: Math.floor(Math.random() * 11),
            border: {right: 2, bottom: 2},
            number: 7
        },
    };
    return pieces[piece];
};

export default piece;
