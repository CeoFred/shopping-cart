import React, { Component } from 'react';
import Counter from './counter';
import Navbar from './navbar';
import Infinix from '../img/1(13).jpg'
import Infinix2 from '../img/1(14).jpg'
import Infinix3 from '../img/1(15).jpg'

class Counters extends Component {
    state = {
        counters: [
            {id:1, value:0 , name:'Infinix Hot 6',price: 59000.00,img: Infinix},
            {id:2, value:0,name:'Infinix Hot 6',price: 59000.00,img: Infinix2 },
            {id:3,name:'Infinix Hot 6',price: 59000.00,img: Infinix3, value:0 },
            {id:4, value:0,name:'Infinix Hot 6',price: 59000.00,img: Infinix },
            {id:5, value:0 ,name:'Infinix Hot 6',price: 59000.00,img: Infinix}
        ],
        cartItems: []
    };
    handleIncrement = counter =>{
        // cloning counters array from state
        const counters = [...this.state.counters];
        // getting the index of the object counter gotten from the argument from the class handleIncrement
        const index = counters.indexOf(counter);
        // increasing the value of the object in the array counters
        counters[index].value++;
        // updating the state counters
        this.setState({counters});
    }
    handleReset = () => {
       const counters = this.state.counters.map(c => {
            c.value = 0;
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
<Navbar handleReset={this.handleReset} CartItems={this.state.counters.filter(c => c.value > 0).length}/>
           {this.state.counters.map(counter =>(
               
             <Counter onDelete={this.handleDelete}
             onIncrement={this.handleIncrement}
             counter={counter}
             key={counter.id}
              />))}
            </div>
            );
    }
}

export default Counters;
