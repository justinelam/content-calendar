import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import {addHours} from 'date-fns';

BigCalendar.momentLocalizer(moment); // or globalizeLocalizer
class App extends Component {
  state = {
    events: [
      {
        'title': 'NEW CONTENT',
        "label": "NEW",
        "contentId": 3,
        'start': new Date("2017-12-13T05:50:01.983Z"),
        'end': addHours(new Date("2017-12-13T05:50:01.983Z"), 4)
      },
      {
        'title': 'UPCOMING CONTENT',
        "label": "UPCOMING",
        "contentId": 3,
        'start': new Date("2017-12-13T06:06:18.991Z"),
        'end': addHours(new Date("2017-12-13T06:06:18.991Z"), 4)
      },

      {
        'title': 'FEATURED CONTENT',
        "label": "FEATURED",
        "contentId": 4,
        'start': new Date("2017-12-13T00:06:18.991Z"),
        'end': addHours(new Date("2017-12-13T00:06:18.991Z"), 4)
      },
    ],
  }
  deleteEvent(event){
    this.setState( (state) => ({
      events: state.events.filter( (e) => e.title !== event.title )
    }))
  }
  addEvent(label,title,start,end){
    const event = { label, title, start, end };
    console.log(event);
    this.setState( (state) => ({
      events: state.events.concat([event])
    }))
  }
  render(){
    const {events} = this.state;
    return (
      <BigCalendar
        {...this.props}
        selectable
        events={events}
        step={30}
        defaultView={"day"}
        timeslots={1}
        onSelectEvent={event => {
                                  if (window.confirm(`Do you want to delete ${event.title}`) == true ) {
                                    this.deleteEvent(event);
                                  }  } }
        onSelectSlot={(slotInfo) => {
            var label = prompt(
            `You've selected the slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
            `\nend: ${slotInfo.end.toLocaleString()}.\n` +
            `Enter in the type of event you want to create (FEATURED, UPCOMING, NEW CONTENT):`
          );
          this.addEvent(label, `${label} ${slotInfo.start}`, slotInfo.start, slotInfo.end)}}
      />
    )
  }
}

export default App;