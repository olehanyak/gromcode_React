import React, { Component } from "react";

class Toggler extends Component {
  
    changeTextButton(e) {
      console.log(e)
      console.log(e.target.textContent = 'Off')
      e.target.textContent = 'On'
    };

    render() {
        return (
            <button onClick={this.changeTextButton} className="toggler">
                Off
            </button>
        );
    }
}

export default Toggler;
