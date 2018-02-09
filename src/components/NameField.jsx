/*jshint esversion: 6 */
import React, {Component} from 'react';

class NameField extends Component {
    constructor( props ) {
        super(props);       
           
        this.state = {            
            name1: '',
            name2: '', 
            printedNames: {
                name1: '',
                name2: '',
            },           
        };
    }

    handleChange = (event, key) => {
        this.setState({
            [key]: event.target.value,
        });
    }    

    printNames = () => {
        const { name1, name2 } = this.state;
        this.setState({
            printedNames: {
                name1,
                name2,
            },
        });
    }

    render() {             
        return (
            <div>
                <div>                
                    <input  
                        type='text' 
                        onChange={(event) => this.handleChange(event, 'name1')}
                        value={this.state.name1}
                    />
                    <div>
                        Player X name: {this.state.printedNames.name1} 
                    </div>
                    <input  
                        type='text'                    
                        onChange={(event) => this.handleChange(event, 'name2')}
                        value={this.state.name2}
                        />  
                    <div>
                        Player O name: {this.state.printedNames.name2} 
                    </div>
                </div>  
                <button onClick={this.printNames}>save me</button>
            </div>
        );
    }   
}

export default NameField;

