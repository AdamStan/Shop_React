import React from 'react'

export default class MakeOrder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            city: "",
            street: "",
            numberOfBuilding: "",
            postalCode: ""
        }
        this.handleMakeAnOrder = this.handleMakeAnOrder.bind(this)
        this.onChangeCity = this.onChangeCity.bind(this)
        this.onChangeStreet = this.onChangeStreet.bind(this)
        this.onChangeNumberOfBuilding = this.onChangeNumberOfBuilding.bind(this)
        this.onChangePostalCode = this.onChangePostalCode.bind(this)
    }

    handleMakeAnOrder(event) {
        event.preventDefault()
    }

    onChangeCity(event) {
        this.setState({ city: event.target.value })
    }

    onChangeStreet(event) {
        this.setState({ street: event.target.value })
    }

    onChangeNumberOfBuilding(event) {
        this.setState({ numberOfBuilding: event.target.value })
    }

    onChangePostalCode(event) {
        this.setState({ postalCode: event.target.value })
    }

    render() {
        return (
            <div className="alert alert-info">
                <div className="container">
                    <form onSubmit={this.handleMakeAnOrder}>
                        <h3> Finish your order </h3>
                        <div className="row"> 
                            <div className="col"><label> City: </label></div>
                            <div className="col"><input type="text" name="city" value={this.state.city} 
                                 onChange={this.onChangeCity} /></div> 
                        </div>
                        <div className="row">
                            <div className="col"><label> Street: </label></div>
                            <div className="col"><input type="text" name="street" value={this.state.street} 
                                onChange={this.onChangeStreet}/></div>
                        </div>
                        <div className="row">
                            <div className="col"><label> Number of building: </label></div>
                            <div className="col"><input type="text" name="numberOfBuilding" value={this.state.numberOfBuilding}
                                 onChange={this.onChangeNumberOfBuilding}/></div>
                        </div>
                        <div className="row">
                            <div className="col"><label> Postal code: </label></div>
                            <div className="col"><input type="text" name="postalCode" value={this.state.postalCode} 
                                 onChange={this.onChangePostalCode}/></div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <button className="btn btn-warning"> Submit checkout </button>
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