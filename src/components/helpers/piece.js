
const piece = (piece, x, y) => {
    const pieces = {
        'square': {
            coords: [[x, y], [x+1 , y], [x+1, y+1], [x, y+1]],
            name: 'square',
            spawn: Math.floor(Math.random() * 10),
            border: {right: 2, bottom: 2},
            number: 1
        },
        'long1': {
            coords: [[x, y], [x, y+1], [x, y+2], [x, y+3]],
            name: 'long',
            spawn: Math.floor(Math.random() * 9),
            border: {right: 1, bottom: 3},
            number: 2
        }, 
        'long2': {
            coords: [[x, y], [x+1, y], [x+2, y], [x+3, y]],
            name: 'long2',
            spawn: Math.floor(Math.random() * 9),
            border: {right: 3, bottom: 1},
            number: 2
        },
        "t1": {
            coords: [[x, y], [x+1, y+1], [x, y+2], [x, y+1]],
            name: 't1',
            spawn: Math.floor(Math.random() * 10),
            border: {right: 2, bottom: 2},
            number: 3
        },
        "t2": {
            coords: [[x+1, y], [x+1, y+1], [x, y+1], [x+2, y+1]],
            name: 't2',
            spawn: Math.floor(Math.random() * 10),
            border: {right: 3, bottom: 2},
            number: 3
        },
        "t3": {
            coords: [[x, y], [x+1, y], [x+2, y], [x+1, y+1]],
            name: 'tB',
            spawn: Math.floor(Math.random() * 9),
            border: {right: 3, bottom: 2},
            number: 3
        },
        "t4": {
            coords: [[x, y], [x+1, y], [x+2, y], [x+1, y+1]],
            name: 't4',
            spawn: Math.floor(Math.random() * 9),
            border: {right: 3, bottom: 2},
            number: 3
        },
        "l1": {
            coords: [[x, y], [x+1, y], [x+1, y+1], [x+1, y+2]],
            name: 'l1',
            spawn: Math.floor(Math.random() * 10),
            border: {right: 2, bottom: 3},
            number: 4
        },
        "l2": {
            coords: [[x, y+1], [x+1, y+1], [x+2, y+1], [x+2, y]],
            name: 'l2',
            spawn: Math.floor(Math.random() * 9),
            border: {right: 3, bottom: 2},
            number: 4
        },
        "l3": {
            coords: [[x, y], [x, y+1], [x, y+2], [x+1, y+2]],
            name: 'l3',
            spawn: Math.floor(Math.random() * 9),
            border: {right: 2, bottom: 3},
            number: 4
        },
        "l4": {
            coords: [[x, y], [x+1, y], [x+2, y], [x, y+1]],
            name: 'l4',
            spawn: Math.floor(Math.random() * 9),
            border: {right: 3, bottom: 2},
            number: 4
        },
        "j1": {
            coords: [[x, y], [x, y+1], [x+1, y+1], [x+2, y+1]],
            name: 'j1',
            spawn: Math.floor(Math.random() * 10),
            border: {right: 3, bottom: 2},
            number: 5
        },
        "j2": {
            coords: [[x, y], [x+1, y], [x+2, y], [x+2, y+1]],
            name: 'j2',
            spawn: Math.floor(Math.random() * 9),
            border: {right: 3, bottom: 2},
            number: 5
        },
        "j3": {
            coords: [[x+1, y], [x+1, y+1], [x+1, y+2], [x, y+2]],
            name: 'j3',
            spawn: Math.floor(Math.random() * 10),
            border: {right: 2, bottom: 3},
            number: 5
        },
        "j4": {
            coords: [[x, y], [x+1, y+1], [x, y+1], [x, y+2]],
            name: 'j4',
            spawn: Math.floor(Math.random() * 10),
            border: {right: 2, bottom: 3},
            number: 5
        },
        "z1": {
            coords: [[x, y], [x+1 , y], [x+1, y+1], [x+2, y+1]],
            name: 'z1',
            spawn: Math.floor(Math.random() * 10),
            border: {right: 3, bottom: 2},
            number: 6
        },
        "z2": {
            coords: [[x+1, y], [x+1 , y+1], [x, y+1], [x, y+2]],
            name: 'z2',
            spawn: Math.floor(Math.random() * 10),
            border: {right: 2, bottom: 3},
            number: 6
        },
        "s1": {
            coords: [[x, y], [x , y+1], [x+1, y+1], [x+1, y+2]],
            name: 's1',
            spawn: Math.floor(Math.random() * 10),
            border: {right: 2, bottom: 3},
            number: 7
        },
        "s2": {
            coords: [[x, y], [x+1 , y], [x+1, y+1], [x+2, y+1]],
            name: 's2',
            spawn: Math.floor(Math.random() * 9),
            border: {right: 3, bottom: 2},
            number: 7
        },
    };
    return pieces[piece];
};

export default piece;
