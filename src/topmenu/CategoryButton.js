import React from 'react';

class CategoryButton extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            updateFromUrl : props.updateFromUrl,
            urlAddress : props.address
        }
        this.updateUrl = this.updateUrl.bind(this)
    }

    updateUrl(event) {
        event.preventDefault()
        this.state.updateFromUrl(this.state.urlAddress)
    }

    render() {
        return (<button className="btn btn-secondary" onClick={this.updateUrl}> {this.props.categoryName} </button>);
    }
}

export default CategoryButton