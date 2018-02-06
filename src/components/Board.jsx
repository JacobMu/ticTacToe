/*jshint esversion: 6 */
import React, {Component} from 'react';
// import NameField from './NameField'


class Square extends Component {
    constructor( props ) {
        super(props);
        this.state={
            value: null
        }
    }

    render() {
        return (
            <button className='square' onClick={() => this.setState({value: 'X'})}>
                {this.state.value}
            </button>
        );
    }
}

class Board extends Component {
    constructor(props) {
        super(props);
        this.state={
            square: Array(9).fill(null),
        };
    }

    renderSquare(num) {
        return (
            <Square 
                value={this.state.square[num]}
                onClick={() => this.handleClick(num)}
            />
        );
    }

    render() {
        const activePlayer = 'Player 1';


        return (
            <div>
                <div className="status">{activePlayer}</div>

                <div className='row'>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>

                <div className='row'>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>

                <div className='row'>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

export default Board;