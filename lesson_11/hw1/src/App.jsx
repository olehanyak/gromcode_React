import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faCoffee } from "@fortawesome/fontawesome-free-solid";
import Expand from "./Expand.jsx";

class App extends Component {
    render() {
        return (
            <div className="app">
                <Expand title={"Text"}>
                    <p>
                        Hooks are a new addition in React 16.8. They let you use state and other React features without
                        writing a class.
                    </p>
                </Expand>
            </div>
        );
    }
}

export default App;
