import React, {ReactNode, SyntheticEvent} from 'react';
 import ApiCalendar from 'react-google-calendar-api';

 export default class DoubleButton extends React.Component {
     constructor(props) {
       super(props);
       this.handleItemClick = this.handleItemClick.bind(this);
     }

     public handleItemClick(event: SyntheticEvent<any>, name: string): void {
       if (name === 'sign-in') {
         ApiCalendar.handleAuthClick();
       } else if (name === 'sign-out') {
         ApiCalendar.handleSignoutClick();
       }
     }

     render(): ReactNode {
       return (
             <button
                 onClick={(e) => this.handleItemClick(e, 'sign-in')}
             >
               sign-in
             </button>
             <button
                 onClick={(e) => this.handleItemClick(e, 'sign-out')}
             >
               sign-out
             </button>
         );
     }
 }

 /**
     * List all events in the calendar
     * @param {number} maxResults to see
     * @param {string} calendarId to see by default use the calendar attribute
     * @returns {any} Promise with the result.
     */
    public listUpcomingEvents(maxResults: number, calendarId: string = this.calendar): any
