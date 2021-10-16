
const piece = (piece, x, y) => {
    const pieces = {
        'square': [[x, y], [x+1 , y], [x+1, y+1], [x, y+1]],
        'long': [[x, y], [x, y+1], [x, y+2], [x, y+3]], 
        "t-shape":[[x, y], [x+1, y+1], [x, y+2], [x, y+1]], 
        "l":[[x, y], [x+1, y], [x+1, y+1], [x+1, y+2]],
        "j":[[x, y], [x, y+1], [x+1, y+1], [x+2, y+1]],
        "z":[[x, y], [x+1 , y], [x+1, y+1], [x+2, y+1]],
        "s":[[x, y], [x , y+1], [x+1, y+1], [x+1, y+2]]
    };
    return pieces[piece];
};

export default piece;
