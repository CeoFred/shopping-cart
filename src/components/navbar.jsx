import React, { Component } from 'react';
import "bootstrap/css/bootstrap.css";
import List from './list';

class Nabar extends Component {
    state = {  }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active">Shop-On</a>
                                </li>

                             </ul>

                         <form className="form-inline my-2 my-lg-0">
                                <a className="btn btn-success my-2 my-sm-0" href="user/">{this.props.cart} Item(s)</a>
                            </form>

                        </div>
</nav>
                </div>
         );
    }
}

export default Nabar;
