import React, { Component } from "react";

class Toggler extends Component {
    constructor(props) {
        console.log(props)
        // console.log(Component)
        super(props);
        this.state = {isToggleOn: true};
    }

    changeTextButton = () => {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
          }));
        }

    render() {
        return (
            <button onClick={this.changeTextButton} className="toggler">
                 {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

export default Toggler;
