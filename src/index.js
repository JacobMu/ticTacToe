/*jshint esversion: 6 */

import React, { Component } from "react";
import { render } from "react-dom";
import './App.css';
import NameField from "./components/NameField";

// import Board from "./components/Board";


class App extends Component {
    constructor(props) {
        super(props);

        this.state= {
            playerOneSymbol: 'X',
            playerTwoSymbol: 'O',
            currentTurn: 'X',
            winner: null,
            board: [
                "", "", "", "", "", "", "", "", ""
                ],
        }
    }


    handleClick(index) {
        if(this.state.board[index] === '' && !this.state.winner) {
            this.state.board[index] = this.state.currentTurn
            this.setState({
                board: this.state.board,
                currentTurn: this.state.currentTurn === this.state.playerOneSymbol ? this.state.playerTwoSymbol : this.state.playerOneSymbol,
                winner: this.checkForWinner(),
            })
        }
    }

    checkForWinner() {
        let currentTurn = this.state.currentTurn;
        let symbols = this.state.board;
        let winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
        for (let i = 0; i < winningCombos.length; i++) {
            const [a,b,c] = winningCombos[i];
            if (symbols[a] && symbols[a] === symbols[b] && symbols[a]  === symbols[c]) {
                return symbols[a];
            }
        }
        return null;
        
    }
    
    render () {
        return (
            <div className='app-container'>
                Welcome to Tic Tac Toe game!
                <NameField/>
                {this.state.winner ? <h1>{`The winner is ${this.state.winner}`}</h1> : null}

               <div className="board">
                   {this.state.board.map((cell, index) => {
                       return <div onClick={() => this.handleClick(index)}className='square'>{cell}</div>;
                   })}
               </div>

            </div>
        );
    }
}

render(<App />, document.querySelector('.container'));