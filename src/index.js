import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import learnSymbol from './data.js'
import Matrix from './Matrix.js'

// passes a values prop of learnSymbol to the Matrix component 
// learnSymbol is an array of arrays of color values
ReactDOM.render(<Matrix values={learnSymbol} />, document.getElementById('root'));
