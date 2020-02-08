import React from "react";

function Cruise(props) {

    let mappedDest = props.destinations.map((it, idx) =>
        <li key={idx}>{it}</li>
    );

    const [showBonus, setShowBonus] = React.useState("");

    const toggleBonus = () => {
        setShowBonus(props.bonus);
    }


    return (
            <div className="cruise-card">
                <img src={props.bannerImg} alt={props.name}/>
                <h2>{props.name}</h2>
                <h3>{props.numNights} Nights</h3>
                <h4>Ship: {props.ship}</h4>
                <h5>Ports of Call</h5>
                <ul>
                    {mappedDest}
                </ul>
                <button onClick={toggleBonus}>Free Bonus!</button>
                <h2>{showBonus}</h2>
            </div>
    )

}

export default Cruise