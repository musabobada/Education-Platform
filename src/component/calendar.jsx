import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css"
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { enUS, fr } from 'date-fns/esm/locale'

const locales = { en: enUS, fr: fr }

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
})


function CAlendar(props) {
    const events = []
    props.events.forEach(event => {
        let temp = {
            title: event.title,
            // event date is in for of string in form YYYY-MM-DD
            start: new Date(event.start),
            end: new Date(event.end)
        }
        events.push(temp)
    })
    const [newEvent, setNewEvent] = useState({ title: '', time: '' })
    const [allEvents, setAllEvents] = useState(events)

    const addeventhandler = () => {
        setAllEvents([...allEvents, newEvent])
        console.log(setAllEvents)
        console.log(newEvent)

    }
    const isWeekday = (date) => {
        const day = getDay(date);
        return day !== 0 && day !== 6;
    };

    return (
        <>
            <div className="calendar text-center">
                <h2>Add New Event</h2>
                <div className="ca container ">
                    <input type="text" placeholder="Add Title" className="form-control"
                        value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value, })} />
                    <ReactDatePicker
                        className="form-control"
                        isClearable
                        minDate={new Date()}
                        placeholderText="The Date"
                        selected={newEvent.time}
                        onChange={(time) => setNewEvent({ ...newEvent, time })}
                        filterDate={isWeekday}
                        timeInputLabel="Time:"
                        dateFormat="dd/MM/yyyy h:mm aa"
                        withPortal
                        showTimeInput
                        showMonthDropdown
                        required
                        form='submitDate'
                    />
                    <button id='submitDate' className="btn btn-success" onClick={(e) => addeventhandler(e)}>Add Event</button>
                </div>
                <Calendar
                    className="calendarTable"
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500, margin: "20px" }} />
            </div>
        </>
    );
}
export default CAlendar;
