import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        crushes: state.crushes,
        enemies: state.enemies,
    };
};

function List({ crushes, enemies }) {
    return (
        <div>
            <h2>Crushes:</h2>
            <ul>
                {crushes.map((crush) => (
                    <li key={crush}>{crush}</li>
                ))}
            </ul>
            <h2>Enemies:</h2>
            <ul>
                {enemies.map((enemy) => (
                    <li key={enemy}>{enemy}</li>
                ))}
            </ul>
        </div>
    );
}

export default connect(mapStateToProps)(List);
