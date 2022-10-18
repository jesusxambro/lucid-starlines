import React from 'react';
// import PropTypes from 'prop-types';
import Crewmember from './Crewmember.jsx';


const CrewmemberList = ({crewmembers}) => {
  return (
    <div className={"crewList"}>

      {/* Add Crewmember component for each element in props.crewmembers */}
      {crewmembers.map((crewmember,index) =>(
      <Crewmember key={index} crewmember={crewmember}/>  )    )}
      
    </div>
  )
}


// CrewmemberList.propTypes = {
//   crewmembers: PropTypes.array,
//   addToCurrentCrew: PropTypes.func,
// };


export default CrewmemberList;