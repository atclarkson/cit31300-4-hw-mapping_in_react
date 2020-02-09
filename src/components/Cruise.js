import React from "react";

function Cruise(props) {

    let mappedDest = props.destinations.map((it, idx) =>
        <li key={idx}><span className="fa-li port-li"></span>{it}</li>
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
                    <h2>{props.name}<span className="numberCircle"><span>{props.numNights}</span></span></h2>
                    <div>
                        <h4>Ship: {props.ship}</h4></div>

                </div>

                <h5 className="port-o-call">Ports of Call</h5>
                <ul className="port-list fa-ul">
                    {mappedDest}
                </ul>
                <button className="my-button" onClick={toggleBonus}>Free Bonus!</button>
                <h2>{showBonus}</h2>
            </div>
    )

}

export default Cruise