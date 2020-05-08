// for authentication
import React, {Component} from 'react';

class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                //having validation for input field
                validation: {
                    required: true  // Text field should not be empty
                },
                valid: false,
                touched: false
            },
        }
    }
    render (){
        return (
            <div>
                <form>

                </form>
            </div>
        );
    };
};