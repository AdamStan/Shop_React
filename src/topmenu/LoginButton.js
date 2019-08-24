import React from 'react';

class LoginButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value : null,
        }
    }

    render() {
        return (<button className="btn btn-primary"> Login </button>);
    }
}

export default LoginButton