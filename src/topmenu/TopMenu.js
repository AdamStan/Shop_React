import React from 'react';
import SearchButton from './SearchButton'
import LoginButton from './LoginButton'
import CategoryButton from './CategoryButton'

class TopMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updateFromUrl : props.updateFromUrl,
        }
    }

    render() {
        return (
        <ul class="top-menu">
            <li> <CategoryButton updateFromUrl={this.state.updateFromUrl} categoryName="Shop Name" address="http://localhost:8080/items/all"/> </li>
            <li> <CategoryButton updateFromUrl={this.state.updateFromUrl} categoryName="Games" address="http://localhost:8080/items/allGames"/></li>
            <li> <CategoryButton updateFromUrl={this.state.updateFromUrl} categoryName="Books" address="http://localhost:8080/items/allBooks"/></li>
            <li> <CategoryButton updateFromUrl={this.state.updateFromUrl} categoryName="Movies" address="http://localhost:8080/items/allMovies"/></li>
            <li> <SearchButton updateFromUrl={this.state.updateFromUrl} /> </li>
            <li> <LoginButton/> </li>
        </ul>
        );
    }
}

export default TopMenu