import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/main.css';
import './assets/utilities.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
