import React, { Component } from 'react';
import "bootstrap/css/bootstrap.css";

class Form extends Component {
    constructor(props) {
            super(props);
            this.state = {

            }
            //   this.startVal =  this.startVal.bind(this);
        }
    render() {
        return (
            <div>
                <div className="container">
                <div className="row">
                <div className="col-md-5">

                <form action="" method="get" className="form-control">
                <input type="email" className="form-control" placeholder="Email" name="email" id=""  />
                <input type="password" className="form-control"  placeholder="Password" name="pass"  id=""/>
<input type="submit" value="Login" name="submit" className="btn btn-outline-danger btn-sm"/>
                    </form>
                </div>
                    </div>
                    </div>
                </div>
         );
    }
}

export default Form;
