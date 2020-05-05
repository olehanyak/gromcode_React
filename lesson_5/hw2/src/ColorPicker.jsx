import React, { Component } from "react";

// const CORAL = "Coral";
// const AQUA = "Aqua";
// const BISQUE = "Bisque";

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
                        onMouseOver={() => this.showColorName('Coral')}
                        onMouseOut={this.hideColorName}
                    ></button>
                    <button
                        className="picker__button picker__button_aqua"
                        onMouseOver={() => this.showColorName('Aqua')}
                        onMouseOut={this.hideColorName}
                    ></button>
                    <button
                        className="picker__button picker__button_bisque"
                        onMouseOver={() => this.showColorName('Bisque')}
                        onMouseOut={this.hideColorName}
                    ></button>
                </div>
            </div>
        );
    }
}

export default ColorPicker;
