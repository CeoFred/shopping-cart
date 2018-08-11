import React, { Component } from 'react';
import "bootstrap/css/bootstrap.css";


class Counter extends Component {
    state = {
        count: 0
         };
        //  constructor(){
        //      super();
        //    this.handleIncrement =  this.handleIncrement.bind(this);
        //  }

validate = () =>{

  return  this.state.count > 10  ? <h6 className="alert alert-danger"> Number is Big sha</h6> :
   <h6 className="alert alert-success">Number is too small</h6>;
}

         handleIncrement = () => {
          this.setState({ count: this.state.count + 1});
         }
    handledecre = () => {
        this.setState({ count: this.state.count - 1 });
    }
    render() {
        return (
            <div>
            <span  className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button
            onClick={this.handleIncrement} className="btn btn-secondary btn-sm">
                + Add
            </button>
                <button
                    onClick={this.handledecre} className="btn btn-warning btn-sm">
                    - Subtract
            </button>

{/* // calls a function to check if the count is zero or more than 10 and returns an output */}
            <span>
                {this.validate()}
            </span>

            </div>
         );
    }
    getBadgeClasses() {
        let color = "badge m-2 badge-";
        color += this.state.count === 0 ? "danger" : "primary";
        return color;
    }

    formatCount(){
        const {count} = this.state;
         return count === 0 ? <h3>0</h3>: count
    }
}

export default Counter;
