import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';
import './Person/Person.css';
class App extends Component {
state = {
    persons: [
        {name: 'Max',age:50},
        {name: 'Ozioma',age:18},
        {name: 'Tom',age:30}
    ]
}
swithNameHandler = (newName) =>{
  //  console.log('Was Clicked')

this.setState({persons:[

    {name: newName,age:10},
    {name: 'Ozioma',age:38},
    {name: 'Tom',age:60}
]})
}

changeName = (event) =>{

this.setState({persons:[

    {name: 'Fred',age:10},
    {name: 'Ozioma',age:38},
    {name: event.target.value,age:60}
]})
}
  render() {
      const style ={
          backgroundColor : 'White',
          font: 'inherit',
          border:'1px solid blue',
          padding: '8px',
          cursor:
'Pointer',align:'center'
      };
    return (
      <div className="App">
    <h1>Hello I am  a React App!Working with States anad Props</h1>
<Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>

<Person name={this.state.persons[1].name} age={this.state.persons[1].age}
click={this.swithNameHandler.bind(this,'Alfred!')}/>

<Person name={this.state.persons[2].name} age={this.state.persons[2].age}
 changed={this.changeName}/>


 <Person name="Tom" age="50">Yeah Baby!
 <br/>
 <button style={style} onClick={this.swithNameHandler.bind(this,'Alfred')}>Switch Name</button>

 </Person>
       </div>
    );
  }
}

export default App;
