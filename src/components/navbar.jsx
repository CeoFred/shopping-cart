import React, { Component } from 'react';
// import List from './list';
// stateless functional components
const Nabar = (props) => {
    return (
        <div>
        <nav className="navbar navbar-light bg-dark">
<a className="p-2 m-1 navbar-brand text-light" style={ []}>ShopOn</a>

<a className="badge badge-primary m-2">Cart Items {props.CartItems}
</a>
<button
onClick={props.handleReset}
className="btn btn-primary btn-sm m-2">Reset</button>

</nav>
        </div>
     );
}

export default Nabar;
