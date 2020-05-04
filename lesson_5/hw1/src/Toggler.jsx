import React, { Component } from "react";

class Toggler extends Component {
    constructor(props) {
        console.log(props)
        // console.log(Component)
        super(props);
        this.state = {turnOn: 'Off'};
    }

    changeTextButton = () => {
        this.setState(state => ({
            turnOn: !state.turnOn
          }));
        }

    render() {
        return (
            <button onClick={this.changeTextButton} className="toggler">
                 {this.state.turnOn ? 'Off' : 'On'}
            </button>
        );
    }
}

export default Toggler;
