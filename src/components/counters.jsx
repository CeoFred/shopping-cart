import React, { Component } from 'react';
import Counter from './counter';
import Navbar from './navbar';
import Infinix from '../img/1(13).jpg'
import Infinix2 from '../img/1(14).jpg'
 import Infinix3 from '../img/1(15).jpg'

import { Container, Row, Col } from 'reactstrap';
// import { Button } from 'reactstrap';
// import {
//     Collapse,
//     NavbarToggler,
//     NavbarBrand,
//     Nav,
//     NavItem,
//     NavLink,
//     UncontrolledDropdown,
//     DropdownToggle,
//     DropdownMenu,
//     DropdownItem
// } from 'reactstrap';




class Counters extends Component {
    state = {
        counters: [
            {id:1, quantity:0 , name:'Infinix Hot 6',price: 59000.00,img: Infinix},
            {id:2, quantity:0,name:'Infinix Hot 6',price: 59000.00,img: Infinix2 },
            {id:3,name:'Infinix Hot 6',price: 59000.00,img: Infinix3, quantity:0 },
            {id:4, quantity:0,name:'Infinix Hot 6',price: 59000.00,img: Infinix },
            {id:5, quantity:0 ,name:'Infinix Hot 6',price: 59000.00,img: Infinix}
        ],
        cartItems: []
    };
    handleIncrement = counter =>{
        // cloning counters array from state
        const counters = [...this.state.counters];
        // getting the index of the object counter gotten from the argument from the class handleIncrement
        const index = counters.indexOf(counter);
        // increasing the quantity of the object in the array counters
        counters[index].quantity++;
        // updating the state counters
        alert(counters[index])
        this.setState({ counters });
    }
    handleReset = () => {
       const counters = this.state.counters.map(c => {
            c.quantity = 0;
            return c;
        });
        this.setState({ counters});
    };
    handleDelete = (id) => {
        // alert('Something was changed with id = ' + id);
        const counterso = this.state.counters.filter(c => c.id !== id);
        this.setState({ counters:counterso});
    };

    render() {
        return ( <div>
<Navbar handleReset={this.handleReset}
CartItems={this.state.counters.filter(c => c.quantity > 0).length}/>
            <Container>
                <Row>
                        {this.state.counters.map(counter => (

                        <Col xs="3">
                           <Counter onDelete={this.handleDelete}
                                onIncrement={this.handleIncrement}
                                counter={counter}
                                key={counter.id}
                            />
                            </Col>
                        ))}
                    </Row>
                    </Container>


            </div>
            );
    }
}

export default Counters;
