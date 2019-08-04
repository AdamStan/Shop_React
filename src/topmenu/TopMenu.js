import React from 'react';
import SearchButton from './SearchButton'
import LoginButton from './LoginButton'

class TopMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value : null,
        }
    }

    render() {
        return (
        <ul class="top-menu">
            <li> Shop_name </li>
            <li> <LoginButton/> </li>
            <li> <SearchButton/> </li>
        </ul>
        );
    }
}

export default TopMenu