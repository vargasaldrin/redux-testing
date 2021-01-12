import { ADD_CRUSH, ADD_ENEMY } from "../constants/action-types";

export const addCrush = (payload) => {
    return { type: ADD_CRUSH, payload };
};

export const addEnemy = (payload) => {
    return { type: ADD_ENEMY, payload };
};
