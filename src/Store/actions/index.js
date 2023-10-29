import { SET_GRID_SIZE, SET_PLAYER_NAME } from "../Reducers";

export const setGridSize = (gridSize) => {
    return {
        type : SET_GRID_SIZE,
        payload : gridSize
    }
};

export const setPlayersName = (gridSize) => {
    return {
        type : SET_GRID_SIZE,
        payload : {player1 : player1, player2 : player2}
    }
};
