import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import Digit from './components/Digit';




let seconds = 0;
const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(() => {
  let digits = seconds.toString();
  while (digits.length < 6) digits = "0" + digits;
  root.render(<Digit digits={digits} />);
  seconds++;
}, 1000);

