import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/fontawesome-free-solid";

// class Expand extends Component {
//     state = {
//         content: false,
//     };

//     onHide = () => {
//         this.setState({
//             content: false,
//         });
//     };

//     onShow = () => {
//         this.setState({
//             content: true,
//         });
//     };

//     render() {
//         const button = this.state.content ? (
//             <i className="fas fa-chevron-up"></i>
//         ) : (
//             <i className="fas fa-chevron-down"></i>
//         );
//         const place = this.state.content && <div className="expand__content">{this.props.children}</div>;

//         return (
//             <div className="expand border">
//                 <div className="expand__header">
//                     <span className="expand__title">{this.props.title}</span>
//                     <button className="expand__toggle-btn">
//                         {button}
//                         <FontAwesomeIcon icon={faChevronDown} onClick={this.onShow} />
//                         <FontAwesomeIcon icon={faChevronUp} onClick={this.onHide} />
//                     </button>
//                 </div>
//                 {place}
//             </div>
//             // </div>
//         );
//     }
// }

// export default Expand;

class Expand extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: false,
        };
    }

    showText = () =>
        this.setState({
            content: !this.state.content,
        });

    render() {
        const button = this.state.content ? (
            <i className="fas fa-arrow-up"></i>
        ) : (
            <i className="fas fa-arrow-down"></i>
        );
        const content = this.state.content && <div className="expand__content">{this.props.children}</div>;

        return (
            <div className="expand border">
                <div className="expand__header">
                    <span className="expand__title">{this.props.title}</span>
                    <button className="expand__toggle-btn" onClick={this.showText}>
                        {button}
                        <FontAwesomeIcon icon={faChevronDown} onClick={this.onShow} />
                       <FontAwesomeIcon icon={faChevronUp} onClick={this.onShow}  />
                    </button>
                </div>
                {content}
            </div>
        );
    }
}

export default Expand;
