import React, { Component } from "react";

const CORAL = "coral";
const AQUA = "aqua";
const BISQUE = "bisque";

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
    };

    render() {
        return (
            <div>
                <div className="picker__title"> {`${this.state.showIn}`}</div>
                <div>
                    <button
                        className="picker__button picker__button_coral"
                        onMouseOver={() => this.showColorName(CORAL)}
                    ></button>
                    <button
                        className="picker__button picker__button_aqua"
                        onMouseOver={() => this.showColorName(AQUA)}
                    ></button>
                    <button
                        className="picker__button picker__button_bisque"
                        onMouseOver={() => this.showColorName(BISQUE)}
                    ></button>
                </div>
            </div>
        );
    }
}

export default ColorPicker;
