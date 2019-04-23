import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="Logo" alt="logo" />
        <p>
          Get Started
        </p>


        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Our Website
        </a>
      </header>
    </div>
  );
}

export default App;
