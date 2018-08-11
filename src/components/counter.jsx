import React, { Component } from 'react';
import "bootstrap/css/bootstrap.css";


class Counter extends Component {
    render() {
        return (

            <div>
                <div className="container">

                <div className="row">
<div className="col">
<img src={this.props.counter.img} alt={this.props.counter.name}/>
<br/>
{/* <span  className={this.getBadgeClasses()}>{this.formatCount()}</span> */}

                <button className="btn btn-danger btn-sm"
            onClick={() => this.props.onDelete(this.props.counter.id)}>Remove</button>
            <button
            onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">
             Add To cart
            </button>
                </div>

</div>
                    </div>
 </div>
         );
    }
    getBadgeClasses() {
        let color = "badge m-2 badge-";
        color += this.props.counter.value === 0 ? "danger" : "primary";
        return color;
    }

    formatCount(){
        const {value} = this.props.counter;
         return value === 0 ? <h3>0</h3>: value
    }
}

export default Counter;
