import React, { useState } from "react";
import { connect } from "react-redux";
import { addCrush, addEnemy } from "../actions/index";
import store from "../store";

function Input(props) {
    const [name, setName] = useState("");

    const handleChange = (e) => {
        return setName(e.target.value);
    };

    const handleClick = (e) => {
        if (e.target.id === "crush") {
            props.addCrush(name);
        } else if (e.target.id === "enemy") {
            props.addEnemy(name);
        }
        setName("");
        console.log(store.getState());
    };

    return (
        <div>
            <input type="text" value={name} onChange={handleChange} />
            <br />
            <button id="crush" onClick={handleClick}>
                Add Crush
            </button>
            <button id="enemy" onClick={handleClick}>
                Add Enemy
            </button>
        </div>
    );
}

export default connect(null, { addCrush, addEnemy })(Input);
