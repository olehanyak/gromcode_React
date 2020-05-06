import React from "react";
import Online from "./Online";
import Offline from "./Offline";

// class Status extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { isOnline: null };
//     }

//     setStatus = () => {
//         this.setState({
//             isOnline: false,
//         });
//     };

//     changeStatus = () => {
//         this.setState({
//             isOnline: true,
//         });
//     };

//     render() {
//         // let status;

//         // if (this.state.isOnline === true) {
//         //     status = <Online online={this.setStatus} />;
//         // } else {
//         //     status = <Offline offline={this.changeStatus} />;
//         // }

//         return (
//             <div>
//                 {/* <div>{status}</div> */}
//                 {this.state.isOnline ? <Online online={this.setStatus} /> : <Offline offline={() => this.changeStatus()} />}
//             </div>
//         );

//     }
// }

const Status = (props) => {
    if (props.isOnline === true) {
        return <Online />;
    }
    return <Offline />;
};

export default Status;
