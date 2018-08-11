import React from 'react';
import ReactDOM from 'react-dom';

// import App from './App';
// import Main from '../src/components/Main'
import registerServiceWorker from './registerServiceWorker';
// import Form from "./components/form";

import Counters from './components/counters';



// ReactDOM.render(<Form />, document.getElementById("form"));
// registerServiceWorker();

ReactDOM.render(<Counters />, document.getElementById("root"));
registerServiceWorker();

// ReactDOM.render(<Main />, document.getElementById('list'));
// registerServiceWorker();
