// import React, { useState, createContext } from 'react';
// import piece from '../helpers/piece';

//buildGrid - builds grid with grid as is drawn - with piece there. 
//render piece - renders a piece to the grid. Takes an XY coordinate and draws piece at location on grid. does not update grid state. adjustable by controls. 
//controls - render piece at new xy, or rotate piece at current xy.
//start movement - render piece at top xy - starts timer to render piece at new xy every interval
//ifBottom - if piece tries to move down but hits something not 0 - clear interval, check tetris, start movement of new piece or end game
//ifBlocked - if piece tries to move (or rotate) to any square not 0 - return
//endGame - sets game end and puts up endgame screen
//ifEnd - check if intended render is down, but stuck at y =< 1

//start movement ->
    //render piece ->
        //ifBlocked
        //ifBottom ->
            //clear timeout (or interval) by id
            //check tetris
            //ifEnd ->
                //endGame
            //set grid state
            //start movement

