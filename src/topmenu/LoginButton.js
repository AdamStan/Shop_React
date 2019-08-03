import React from 'react';

class LoginButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value : null,
        }
    }

    render() {
        return (<button> Login </button>);
    }
}