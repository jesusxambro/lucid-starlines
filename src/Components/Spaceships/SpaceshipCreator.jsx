import React from 'react';
// import PropTypes from 'prop-types';

class SpaceshipCreator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shipname: "",
      shipfuel: 0
    }
  }

  handleFuelChange() {
    /* Update the shipfuel state */
  }

  handleNameChange() {
    /* Update the shipname state */
  }

  render() {
    return (
      <div>
        {/* Create a form to hold new Spaceship information */}
        <form>

          {/* Create a text box to hold the new name */}
          

          {/* Create a number input to hold the new fuel */}
          

          {/* Create a submit button to submit your form */}

        </form>
      </div>
    )
  }
  
} 

// SpaceshipCreator.propTypes = {
//   createNewSpaceship: PropTypes.func,
// };

export default SpaceshipCreator;