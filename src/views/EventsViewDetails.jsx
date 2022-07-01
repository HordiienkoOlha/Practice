import useFetchEvent from '../hooks/useFetchEvent'
import {useLocation, useNavigate} from 'react-router-dom'



export default function EventsViewDetails() {
    const event = useFetchEvent();
    const location = useLocation();
    const navigate = useNavigate();
    
    return (
        <>
            
            {event && 
                <>
                <button onClick={(()=> navigate(location?.state?.from??"/"))}>Go back</button>
                <h2>{event.name}</h2>
                <img src={event.images[0].url} alt="event" />
                <p>Genre:{event.classifications[0].genre.name}</p>
            </>}
        </>

        
    )
}