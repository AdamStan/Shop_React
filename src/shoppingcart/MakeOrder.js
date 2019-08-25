import React from 'react'

export default class MakeOrder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            city: "",
            street: "",
            numberOfBuilding: "",
            postalCode: "",
            handleMakeAnOrder: props.handleMakeAnOrder
        }
        this.onChange = this.onChange.bind(this)
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div className="alert alert-info">
                <div className="container">
                    <form>
                        <h3> Finish your order </h3>
                        <div className="row"> 
                            <div className="col"><label> City: </label></div>
                            <div className="col"><input type="text" name="city" value={this.state.city} 
                                 onChange={this.onChange} /></div> 
                        </div>
                        <div className="row">
                            <div className="col"><label> Street: </label></div>
                            <div className="col"><input type="text" name="street" value={this.state.street} 
                                onChange={this.onChange}/></div>
                        </div>
                        <div className="row">
                            <div className="col"><label> Number of building: </label></div>
                            <div className="col"><input type="text" name="numberOfBuilding" value={this.state.numberOfBuilding}
                                 onChange={this.onChange}/></div>
                        </div>
                        <div className="row">
                            <div className="col"><label> Postal code: </label></div>
                            <div className="col"><input type="text" name="postalCode" value={this.state.postalCode} 
                                 onChange={this.onChange}/></div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <button onClick={(e) => this.state.handleMakeAnOrder(e, this.state.city, this.state.street, 
                                                                                     this.state.numberOfBuilding, this.state.postalCode)} 
                                        className="btn btn-warning"> Submit checkout </button>
                            </div>
                            <div className="col">
                                <button className="btn btn-danger"> Cancel </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="row">
                    display products and total price
                </div>
            </div>
        )
    }
}