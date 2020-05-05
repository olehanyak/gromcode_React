import React, { Component } from "react";

const CORAL = "Coral";
const AQUA = "Aqua";
const BISQUE = "Bisque";

class ColorPicker extends Component {
    constructor(props) {
        console.log(props);
        // console.log(Component)
        super(props);
        this.state = { showIn: '', };
    }

    showColorName = (color) => {
        this.setState({
            showIn: color,
        });
    }

    hideColorName = () => {
        this.setState({
            showIn: '',
        });
    }

    render() {
        return (
            <div>
                <div className="picker__title"> {`${this.state.showIn}`}</div>
                <div>
                    <button
                        className="picker__button picker__button_coral"
                        onMouseEnter={() => this.showColorName(CORAL)}
                        onMouseOut={this.hideColorName}
                    ></button>
                    <button
                        className="picker__button picker__button_aqua"
                        onMouseEnter={() => this.showColorName(AQUA)}
                        onMouseOut={this.hideColorName}
                    ></button>
                    <button
                        className="picker__button picker__button_bisque"
                        onMouseEnter={() => this.showColorName(BISQUE)}
                        onMouseOut={this.hideColorName}
                    ></button>
                </div>
            </div>
        );
    }
}

export default ColorPicker;
