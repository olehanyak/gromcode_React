import React, { Component } from "react";

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
        const { title, children } = this.props;
        const { content } = this.state;
        const arrowUp = <i className="fas fa-chevron-up" />;
        const arrowDown = <i className="fas fa-chevron-down" />;
        return (
            <div className="expand border">
                <div className="expand__header">
                    <span className="expand__title">{title}</span>
                    <button className="expand__toggle-btn" onClick={this.onShow}>
                        {content ? arrowUp : arrowDown}
                    </button>
                </div>
                {content && <div className="expand__content">{children}</div>}
            </div>
        );
    }
}

export default Expand;
