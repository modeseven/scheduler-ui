import React from 'react';
class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    async handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "id": 0,
            "apptType": "string",
            "firstName": "string",
            "lastName": "string",
            "status": "string",
            "subjectId": "string"
          })
    };
    const response = await fetch('api/apptrqst', requestOptions);
    const data = await response.json();


    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }

export default Toggle;