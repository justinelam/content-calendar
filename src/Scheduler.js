import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer
class Scheduler extends Component {
	state = {
		events: [
		  {
	      'title': 'All Day Event very long title',
	      'allDay': true,
	      'start': new Date(2015, 3, 0),
	      'end': new Date(2015, 3, 1)
	    },
	    {
	      'title': 'Long Event',
	      'start': new Date(2015, 3, 7),
	      'end': new Date(2015, 3, 10)
	    },

	    {
	      'title': 'DTS STARTS',
	      'start': new Date(2016, 2, 13, 0, 0, 0),
	      'end': new Date(2016, 2, 20, 0, 0, 0)
	    },

	    {
	      'title': 'DTS ENDS',
	      'start': new Date(2016, 10, 6, 0, 0, 0),
	      'end': new Date(2016, 10, 13, 0, 0, 0)
	    },

	    {
	      'title': 'Some Event',
	      'start': new Date(2015, 3, 9, 0, 0, 0),
	      'end': new Date(2015, 3, 9, 0, 0, 0)
	    },
		],
	},
  render() {
  	const {events} = this.state
    return (
      <div>
        <BigCalendar
          views={['day']}
        />
      </div>
    );
  }
}

export default Scheduler;
