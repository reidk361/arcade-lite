
const piece = (piece, x, y) => {
    const pieces = {
        'square': [[x, y], [x+1 , y], [x+1, y+1], [x, y+1]],
        'long': [[x, y], [x, y+1], [x, y+2], [x, y+3]]
    };
    return pieces[piece];
};

export default piece;
