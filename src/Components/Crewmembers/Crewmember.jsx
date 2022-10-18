import React from 'react';


const Crewmember = ({crewmember}) => {
  return (
   /* A click on this div should add to the current crewlist in App */
    <div className={"crewCard"}>
      {/* Show the name of the crewmember */}
      <h3>{crewmember.name}</h3>
      {/* Show the morale of the crewmember */}      
      <h5>Morale: {crewmember.morale}</h5>
    </div>
  )
}


// Crewmember.propTypes = {
//   crewmember: PropTypes.object,
//   addToCurrentCrew: PropTypes.func
// };


export default Crewmember;