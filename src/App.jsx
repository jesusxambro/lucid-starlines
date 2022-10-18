import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {crewmembersTest} from "./Test-Data/sample-crew.js";
import {spaceshipsTest} from "./Test-Data/sample-spaceships.js";

import SpaceshipSection from './Components/Spaceships/SpaceshipSection.jsx'
import CrewmemberSection from './Components/Crewmembers/CrewmemberSection.jsx';
import CurrentSelection from './Components/CurrentSelection/CurrentSelection.jsx';

function App() {

    const [spaceships, setSpaceships] = useState(spaceshipsTest);
    const [crewmembers, setCrewmembers] = useState(crewmembersTest);
    const [currentShip, setCurrentShip] = useState({});
    const [currentCrew, setCurrentCrew] = useState([]);

    useEffect(() => {


        }
        , [])

    return (
        <div>
            <h1 className={"header"}>Welcome to Lucid Starlines!</h1>
            <CurrentSelection currentShip={currentShip}
                              currentCrew={currentCrew}
            />

            <SpaceshipSection spaceships={spaceships}
                              setCurrentShip={setCurrentShip}
                              currentShip={currentShip}

            />

            <CrewmemberSection crewmembers={crewmembers}
            />


        </div>
    )
}

export default App
