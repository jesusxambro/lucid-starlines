import React from 'react';
// import PropTypes from 'prop-types';
import CrewmemberList from './CrewmemberList.jsx';
import CrewmemberCreator from './CrewmemberCreator.jsx';

const CrewmemberSection = ({crewmembers}) => {
  return (
    <div>
        <h2>Crew</h2>
      <h3>Select your crew members to add to our current mission</h3>
      {/* Render a CrewmemberList component */}
        <CrewmemberList crewmembers={crewmembers}/>

      <h3>Or create your own!</h3>
      {/* Render a CrewmemberCreator component */}
        <CrewmemberCreator />

    </div>
  )
}

export default CrewmemberSection;

// CrewmemberSection.propTypes = {
//   crewmembers: PropTypes.array,
//   createNewCrewmember: PropTypes.func,
//   addToCurrentCrew: PropTypes.func,
// };