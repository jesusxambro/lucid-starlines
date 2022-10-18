import React from 'react';
// import PropTypes from 'prop-types';
import Spaceship from './Spaceship.jsx';


const SpaceshipList = ({spaceships, currentShip, setCurrentShip}) => {
  return (
    <div className={"spaceshipList"}>
      {spaceships.map((spaceship, index) =>{

          return(
          <Spaceship key={index}
                     spaceship={spaceship}
                     setCurrentShip={setCurrentShip}
                     currentShip={currentShip}
          />
      )})}
      {/* Add Spaceship components for each element in props.spaceships */}

    </div>
  )
}


// SpaceshipList.propTypes = {
//   spaceships: PropTypes.array,
//   selectCurrentShip: PropTypes.func
//
// };


export default SpaceshipList;