import React from 'react';
import Crewmember from "../Crewmembers/Crewmember.jsx";

const CurrentSelection = ({currentCrew, currentShip}) => {
    const listOfCrew = ()=> {
        return (
            currentCrew.map((crew)=>{
                return(
                    <Crewmember crewmember={crew} />
                )
            })
        )
    }

  return (
    <div className={"currentCard"}>
      <h2>Your current ship is: {currentShip.name}</h2>
      {/* Show your current ship's name and fuel count */}

      <h3>These are the Crewmembers on the mission: {listOfCrew()}</h3>
      {/* Show the list of the current crewmembers */}

    </div>
  )

}


export default CurrentSelection;

// CurrentSelection.propTypes = {
//   currentCrewmembers: PropTypes.array,
//   currentShip: PropTypes.object,
//   removeFromCurrent: PropTypes.func
// };