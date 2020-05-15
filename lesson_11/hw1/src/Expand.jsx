import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/fontawesome-free-solid";
// import PropTypes from "prop-types";

class Expand extends Component {
    state = {
        content: false,
    };

    onShow = () => {
        this.setState({
            content: !this.state.content,
        });
    };

    render() {
        const arrowUp = <FontAwesomeIcon icon={faChevronUp} />;
        const arrowDown = <FontAwesomeIcon icon={faChevronDown} />;

        const button = this.state.content ? (
            <i className="fas fa-chevron-up">{arrowUp}</i>
        ) : (
            <i className="fas fa-chevron-down">{arrowDown}</i>
        );
        const place = this.state.content && <div className="expand__content">{this.props.children}</div>;

        return (
            <div className="expand border">
                <div className="expand__header">
                    <span className="expand__title">{this.props.title}</span>
                    <button className="expand__toggle-btn" onClick={this.onShow}>
                        {button}
                    </button>
                </div>
                {place}
            </div>
        );
    }
}

export default Expand;
