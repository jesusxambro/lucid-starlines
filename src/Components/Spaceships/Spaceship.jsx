import React from 'react';
import '../../App.css'
// import PropTypes from 'prop-types';


const Spaceship = ({spaceship, currentShip, setCurrentShip}) => {

    function handleClick(event) {
        event.preventDefault();
        setCurrentShip(spaceship);

    }

    return (
    /* A click on this div should update the current spaceship in App */
    <div className={"spaceshipCard"} onClick={handleClick}>
      {/* Show the name of the spaceship */}
      <h3>{spaceship.name}</h3>
      {/* Show the fuel count of the spaceship */}
      <h5>Fuel: {spaceship.fuel}</h5>
    </div>
  )
}


// Spaceship.propTypes = {
//   spaceship: PropTypes.object,
//   selectCurrentShip: PropTypes.func
// };


export default Spaceship;