import React from 'react';
import '../../App.css'
// import PropTypes from 'prop-types';
import SpaceshipList from './SpaceshipList.jsx'
import SpaceshipCreator from './SpaceshipCreator.jsx';

const SpaceshipSection = ({spaceships, currentShip, setCurrentShip}) => {
    return (
        <div >
            <h3>Select your spaceship</h3>
            <div className={"spaceshipSection"}>
                {/* Render a SpaceshipList component */}
                <SpaceshipList spaceships={spaceships}
                               setCurrentShip={setCurrentShip}
                               currentShip={currentShip}
                />
            </div>

            <h2>Or create your own!</h2>
            {/* Render a SpaceshipCreator component */}

        </div>
    )
}

export default SpaceshipSection;

// SpaceshipSection.propTypes = {
//   spaceships: PropTypes.array,
//   createNewSpaceship: PropTypes.func,
//   selectCurrentShip: PropTypes.func
// };
