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
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item"> 
                        <CategoryButton updateFromUrl={this.state.updateFromUrl} categoryName="Shop Name" 
                                        address="http://localhost:8080/items/all"/> 
                    </li>
                    <li className="nav-item"> 
                        <CategoryButton updateFromUrl={this.state.updateFromUrl} 
                                        categoryName="Games" address="http://localhost:8080/items/allGames"/>
                    </li>
                    <li className="nav-item"> 
                        <CategoryButton updateFromUrl={this.state.updateFromUrl} 
                                        categoryName="Books" address="http://localhost:8080/items/allBooks"/>
                    </li>
                    <li className="nav-item"> 
                        <CategoryButton updateFromUrl={this.state.updateFromUrl} 
                                        categoryName="Movies" address="http://localhost:8080/items/allMovies"/>
                    </li>
                </ul>
                <SearchButton updateFromUrl={this.state.updateFromUrl} />
                <LoginButton />
            </div>
        );
    }
}

export default TopMenu