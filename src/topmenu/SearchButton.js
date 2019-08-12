import React from 'react';

class SearchButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updateFromUrl : props.updateFromUrl,
            searchName : ""
        }
        this.updateUrl = this.updateUrl.bind(this)
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ searchName: event.target.value })
    }

    updateUrl(event) {
        event.preventDefault()
        this.state.updateFromUrl("http://localhost:8080/items/search?name=" + this.state.searchName)
    }

    render() {
        return (
        <form onSubmit={this.updateUrl}>
            <input placeholder="Search..." value={this.state.searchName} onChange={this.handleChange} />
            <button type="submit"> Find </button>
        </form>
        );
    }
}

export default SearchButton