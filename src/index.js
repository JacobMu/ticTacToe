/*jshint esversion: 6 */

import React from "react";
import { render } from "react-dom";

const App = () => {
    return (
        <div>
            Welcome to Tic Tac Toe game!
        </div>
    );
};

render(<App />, document.querySelector('.container'));