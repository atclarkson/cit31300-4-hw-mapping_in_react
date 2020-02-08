import React from "react";

function Character(props) {


    let mappedMoves = props.moves.map((it,idx)=>
        <li key={idx}>{it}</li>
    );

    const style = {
        minHeight:"100px",
        maxWidth:"200px",
        border: "2px solid black",
        backgroundColor: props.color
    };

    const [showPower, setShowPower] = React.useState("");

    const togglePower =  ()=> {
        setShowPower("My power is " + props.power);
    }

    return (
        <div style={style} onClick={togglePower}>
            <h2>Name: {props.name}</h2>
            <h2>Superpower: {props.power}</h2>
            <h3>Age: {props.age}</h3>
            <h4>Special Moves</h4>
            <ul>
                {mappedMoves}
            </ul>
            <p>{showPower}</p>


        </div>
    )
}

export default Character