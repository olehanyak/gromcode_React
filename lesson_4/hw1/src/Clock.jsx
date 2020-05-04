import React, { Component } from "react";
import "./clock.scss";
// import moment from 'moment';

const getTimeWithOffset = (offset) => {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

class Clock extends Component {
    constructor(props) {
        console.log(props)
        console.log(Component)
        super(props);
        this.state = {
            location: props.location,
            offset: getTimeWithOffset(props.offset).toLocaleTimeString(),
        };

        setInterval(() => {
            this.setState({
                offset: getTimeWithOffset(props.offset).toLocaleTimeString(),
            });
        }, 1000);
    }

    render() {
        return (
            <div className="clock">
                <div className="clock__location">{this.state.location}</div>
                <div className="clock__time">{this.state.offset}</div>
            </div>
        );
    }
}

// const Clock = (props) => {
//     console.log(props)
//     return (
//         <>
//             <div className="clock__location">{props}</div>
//             <div className="clock__time">{`45`}</div>
//         </>
//     );
// };

export default Clock;
