import { SET_GRID_SIZE } from "../Reducers";

export const setGridSize = (gridSize) => {
    return {
        type : SET_GRID_SIZE,
        payload : gridSize
    }
};
