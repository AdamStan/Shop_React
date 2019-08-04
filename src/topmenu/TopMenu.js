import React from 'react';
import SearchButton from './SearchButton'
import LoginButton from './LoginButton'
import CategoryButton from './CategoryButton'

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
            <li> <CategoryButton categoryName="Games" address="http://localhost:8080/items/allGames"/></li>
            <li> <CategoryButton categoryName="Books" address="http://localhost:8080/items/allBooks"/></li>
            <li> <CategoryButton categoryName="Movies" address="http://localhost:8080/items/allMovies"/></li>
            <li> <SearchButton/> </li>
            <li> <LoginButton/> </li>
        </ul>
        );
    }
}

export default TopMenu