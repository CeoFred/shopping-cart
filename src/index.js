import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Main from '../src/components/Main'
import registerServiceWorker from './registerServiceWorker';




// ReactDOM.render(<App />, document.getElementById("root"));
// registerServiceWorker();

ReactDOM.render(<Main />, document.getElementById('list'));
registerServiceWorker();
