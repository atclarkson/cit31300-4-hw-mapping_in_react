import React from 'react';
import Character from "./components/Character";
import './css/Cruise.css'
import Cruise from "./components/Cruise"

function App() {

    const [charArr] = React.useState([
        {
            name: 'Cinder',
            power: 'fire',
            color: 'orange',
            age: 28,
            moves:
                ["Trailblazer", "Inferno", "Fire Flash"]
        },
        {
            name: 'Aganos',
            power: 'rock',
            color: '#009999',
            age: 900000,
            moves:
                ["Payload Assault", "Pulverize", "Ruin"]
        },
        {
            name: 'Jago',
            power: 'Tiger Spirit',
            color: '#336699',
            age: 25,
            moves:
                ["Edokuken", "Tiger Fury", "Wind Kick"]
        }
    ]);

    const [cruiseArray] = React.useState([
        {
            "name": "Europe from Barcelona",
            "numNights": 8,
            "ship": "Carnival Legend",
            "destinations": [
                "Barcalona",
                "Malta",
                "Messina(Sicily)",
                "Naples (Capri & Pompeii)",
                "Rome (Civitavecchia)",
                "Livorno (Florence & Pisa)",
                "Marseille (Provence)"
            ],
            "price": 769,
            "bannerImg": "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            "bonus": "Free Room Upgrade"
        },
        {
            "name": "The Bahamas",
            "numNights": 4,
            "ship": "Carnival Liberty",
            "destinations": [
                "Port Conaveral (Orlando)",
                "Nassau",
                "Freeport"
            ],
            "price": 164,
            "bannerImg": "https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1432&q=80",
            "bonus": "Free Dinner"
        },
        {
            "name": "Panama Canal",
            "numNights": 9,
            "ship": "Carnival Radiance",
            "destinations": [
                "Galveston",
                "Cozumel",
                "Limon",
                "Panama Canal Partial Transit"
            ],
            "price": 719,
            "bannerImg": "https://images.unsplash.com/photo-1560424729-e7519277b60d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80",
            "bonus": "Free Pirate Attack"
        },
        {
            "name": "Baja Mexico",
            "numNights": 4,
            "ship": "Carnival Imagination",
            "destinations": [
                "Long Beach",
                "Catalina Island",
                "Ensenada",
                "Long Beach"
            ],
            "price": 129,
            "bannerImg": "https://images.unsplash.com/photo-1416163255873-f17745e8f851?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1402&q=80",
            "bonus": "Free Time!"
        }
    ]);

    let elements = charArr.map((it, idx) =>
        <Character key={idx} name={it.name} power={it.power} color={it.color} age={it.age} moves={it.moves}/>
    )

    let cruiseEl = cruiseArray.map((it, idx) =>
        <Cruise key={idx} name={it.name} numNights={it.numNights} ship={it.ship} destinations={it.destinations}
                price={it.price} bannerImg={it.bannerImg} bonus={it.bonus}/>
    )

    return (
        <div className="App">
            <h1>These are some dudes:</h1>
            {elements}
            <h2>Wanna book a cruise?</h2>
            <div className="cruise-cards">
                {cruiseEl}
            </div>
        </div>
    );
}

export default App;
