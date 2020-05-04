import React, { Component } from "react";

class GoodButton extends Component {
    hendleClick(e) {
        console.log(e.target.textContent)
        alert(e.target.textContent);
    }

    render() {
        return (
            <button className="fancy-button" onClick={this.hendleClick}>
                Click me!
            </button>
        );
    }
}

export default GoodButton;
