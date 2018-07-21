import React, { Component } from 'react';

//components can be made using class or function
//using class
// class Person extends Component {
//   render() {
//     return (
//       <div className="Projects">
//       Yeah ,nigga said fuck off!
//       {this.props.test}

//       </div>
//     );
//   }
// }

// export default Person;

//usinng function
const Person1 = (props,) => {

return (

    <div className="Person">
    <p onClick={props.click}>Hey There,I'm  {props.name} and i have lived in nigeria for {props.age} ,I think it's time to Leave,I mean,
    'Watyn we gain if we no make the money?'</p>
    <p>{props.children}</p>
    <input type="text" onChange={props.changed} value={props.name}/>
    </div>
)
}
export default Person1;
