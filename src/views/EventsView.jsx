import { fetchEvents } from "services/eventsApi";
import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from 'react-router-dom'


export default function EventsView() {
    const [events, setEvents] = useState([]);
    const location = useLocation();
    useEffect(() => {
        fetchEvents().then(setEvents)
    }, [])

    return (
        <>
            <h2>Events</h2>
            {events.length >0 && (<ul>
                {events.map(({id, name})=>(
                <li key={id}>
                    <Link state={{from:location.pathname}} to={`${id}`}>{name}</Link>
                    
                </li>
                ))}
            </ul>)}
            <Outlet/>
        </>
    )

}