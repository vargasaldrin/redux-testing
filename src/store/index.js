import { createStore } from "redux";
import { addCrush, addEnemy } from "../actions";
import rootReducer from "../reducers";

const store = createStore(rootReducer);

store.subscribe(() => console.log("HEYYYAAA!!!!"));
store.dispatch(addCrush("Beybi!"));
store.dispatch(addEnemy("Hanns"));
console.log(store.getState());

export default store;
