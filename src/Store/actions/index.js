import { SET_GRID_SIZE, SET_PLAYERS_NAME } from "../Reducers";

export const setGridSize = (gridSize) => {
    return {
        type : SET_GRID_SIZE,
        payload : gridSize
    }
};

export const setPlayersName = (player1, player2) => {
    return {
        type : SET_PLAYERS_NAME,
        payload : {player1 : player1, player2 : player2}
    }
};
