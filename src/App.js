import React from 'react';
import './App.css';

// Create component (component below is written in ES6. The class "TodoComponent" is stated and "extends" or is a child of the class "Component".

class Listing extends React.Component {
  render() {
    return (
      <p>One planet in the solar system is {this.props.planet}.</p>
    );
  }
}

export default Listing;
