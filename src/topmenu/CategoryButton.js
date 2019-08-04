import React from 'react';

class CategoryButton extends React.Component {
    render() {
        return (<button> {this.props.categoryName} </button>);
    }
}

export default CategoryButton