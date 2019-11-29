import React from 'react';
import ReactDOM from 'react-dom';
import Booking from './components/Booking.jsx';


ReactDOM.render(<Booking path={window.location.pathname}/>, document.getElementById('booking'));