import React from 'react';

class SearchButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value : null,
        }
    }

    render() {
        return (
        <form method="GET" action="/">
            <input placeholder="Search..."/>
            <button type="submit"> Find </button>
        </form>
        );
    }
}

export default SearchButton