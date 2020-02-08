import React from "react";

function Cruise(props) {

    let mappedDest = props.destinations.map((it, idx) =>
        <li key={idx}>{it}</li>
    );

    const [showBonus, setShowBonus] = React.useState("");

    const toggleBonus = () => {
        setShowBonus(props.bonus);
    }

    const imgStyle = {
        backgroundImage: `url(${props.bannerImg})`
    }
    return (
            <div className="cruise-card">
                <div className="card-image" style={imgStyle}>
                    <h2>{props.name}</h2>
                    <div><h3>{props.numNights} Nights</h3>
                        <h4>Ship: {props.ship}</h4></div>

                </div>

                <h5 className="port-o-call">Ports of Call</h5>
                <ul className="port-list">
                    {mappedDest}
                </ul>
                <button className="my-button" onClick={toggleBonus}>Free Bonus!</button>
                <h2>{showBonus}</h2>
            </div>
    )

}

export default Cruise