import React, { Component } from "react";
import "bootstrap/css/bootstrap.css";
import img from '../img/img.gif'
// importing images for use
import phone2 from '../img/1(13).jpg'
import phone3 from '../img/1(14).jpg'
import phone4 from '../img/1(15).jpg';
import phone5 from '../img/1(16).jpg';
import Navbar from './navbar';
class List extends Component {
    state = {
cart :[],
        count:0,
        phonearray: [{
            id:1,
            name:'Lenevo',
        },{id:2,
            name: 'Samsung Galaxy'
        }]
         };

        //   constructor(){
        //  super();

        // }
//         addtocart = ($id) =>{
//             if($id.inArray(this.state.cart)){
// console.log('already exist')
//             }else{
//                 console.log('not in cart array')
//             }
//         }

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

<Navbar cart={this.state.count}/>
    <div className="container">

<div className="row" align="center">
<div className="col-md-3">
<div className="card">

<img className="card-img-top" src={phone2} alt="Cardimageap"/>
  <div className="card-body">
  <h5 className="card-title">{this.state.phonearray[0].name}</h5>
    <p className="card-text">Some quick example text to build on the card title and
     make up the bulk of the card's content.</p>
    <button className="btn btn-primary" id={this.state.phonearray[0].id} >Add to Cart</button>
    <a className="btn btn-outline-secondary">View</a>
  </div>
</div>
</div>
<div className="col-md-3">
<div className="card">

<img className="card-img-top" src={phone3} alt="Cardap"/>
  <div className="card-body">
  <h5 className="card-title">{this.state.phonearray[1].name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className="btn btn-primary" id={this.state.phonearray[1].id} onClick={this.handleIncrement}>Add to Cart</button>
    <a className="btn btn-outline-secondary">View</a>
  </div>
</div>
</div>

<div className="col-md-3">
<div className="card">

<img className="card-img-top" src={phone5} alt="Cardimageap"/>
  <div className="card-body">
  <h5 className="card-title">Ear Piece</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className="btn btn-primary" onClick={this.handleIncrement}>Add to Cart</button>
    <a className="btn btn-outline-secondary">View</a>
  </div>
</div>
</div>

<div className="col-md-3">
<div className="card">

<img className="card-img-top" src={phone4} alt="Cardimagecap"/>
  <div className="card-body">
  <h5 className="card-title">Infinix</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className="btn btn-primary" onClick={this.handleIncrement}>Add to Cart</button>
    <a className="btn btn-outline-secondary">View</a>
  </div>
</div>
</div>

</div>
    </div>
            </div>


         );
    }
}

export default List;
