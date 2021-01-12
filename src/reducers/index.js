import { ADD_CRUSH, ADD_ENEMY } from "../constants/action-types";

const initialState = {
    crushes: [],
    enemies: [],
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CRUSH:
            return {
                ...state,
                crushes: [...state.crushes, action.payload],
            };
        case ADD_ENEMY:
            return {
                ...state,
                enemies: [...state.enemies, action.payload],
            };
        default:
            return state;
    }
}

export default rootReducer;
