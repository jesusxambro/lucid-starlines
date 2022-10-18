import React from 'react';

class CrewmemberCreator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      crewmemberName: "",
      crewmemberMorale: 0
    }
  }


  handleMoraleChange() {
    /* Update the crewmemberMorale state */
  }

  handleNameChange() {
    /* Update the crewmemberName state */
  }

  render() {
    return (
      <div>
        {/* Create a form to hold new Crewmember information */}
        <form>

          {/* Create a text box to hold the new name */}
          

          {/* Create a number input to hold the starting morale */}
          
          
          {/* Create a submit button to submit your form */}
          
        </form>
      </div>
    )
  }
  
} 

// CrewmemberCreator.propTypes = {
//   createNewCrewmember: PropTypes.func,
// };

export default CrewmemberCreator;