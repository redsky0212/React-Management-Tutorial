import React, {Component} from 'react';

class Customer extends Component {
    render(){
        return (
            <div>
                <h2>{this.props.name}</h2>
                <p>238923489</p>
            </div>
        );
    }
}

export default Customer;