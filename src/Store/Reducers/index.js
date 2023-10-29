export const SET_GRID_SIZE = 'SET_GRID_SIZE'; 
export const SET_PLAYER_NAME = 'SET_PLAYER_NAME';

const initalState = {
    gridSize : 3,
    player1 : '',
    player2 : ''
};

const reducer = (state = initalState, action) => {
    switch(action.type){
        case SET_GRID_SIZE:
            return{
                ...state,
                gridSize : action.payload
            };
        case SET_PLAYER_NAME :
            return{
                ...state,
                player1 : action.payload.player1,
                player2 : action.payload.player2
            };
        default :
            return state;
    }
}
export default reducer;