import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import Dishdetail from './DishDetailComponent'

class Menu extends Component{

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
        console.log('constructor is invoked');
    }

    componentDidMount(){
        console.log('menu comp compdidmount is invoked');
    }

    onDishSelect(dish){
        this.setState({ selectedDish: dish});
    }

    render(){

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        console.log('render is invoked');

        return ( 
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    <Dishdetail dish={this.state.selectedDish} />
                    {/* {this.renderDish(this.state.selectedDish)} */}
                </div>
            </div>
        );
    }

}

export default Menu;