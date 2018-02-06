/*jshint esversion: 6 */
import React, {Component} from 'react';

class NameField extends Component {
    constructor( props ) {
        super(props);

        this.state = {
            name1: '',
            name2: ''
        };
    }

    render() {
        return (
            <div>
                <div>
                    <input  
                        value={this.state.name1}
                        onChange = {event => this.setState({name1 : event.target.value})}  placeholder = "PlayerX"/>
                    Player X name:   {this.state.name1} 
                </div>
                <div>
                    <input  
                        value={this.state.name2}
                        onChange = {event => this.setState({name2 : event.target.value})}  placeholder = "PlayerO"/>   
                     Player O name:   {this.state.name2} 
                </div>
            </div>
        );
    }

    
}

export default NameField;

// onChange = {event => this.setState({name : event.target.value})}