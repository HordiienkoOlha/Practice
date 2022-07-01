import useFetchEvent from '../hooks/useFetchEvent'
import {Link, useLocation} from 'react-router-dom'

export default function EventSubsView() {
    const event = useFetchEvent();
    const location = useLocation();
    return (
        <>
            {event &&
                <>
                <h2>{event.name}</h2>
                <img src={event.images[0].url} alt="event" />
                <Link state={location.state} to='details'>Details</Link>
                </>
        }
        
        </>
    )
}
