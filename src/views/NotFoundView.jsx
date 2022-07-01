import {Link} from 'react-router-dom'
    
export default function NotFoundView() {
    return (
        <p>Page not found, go to <Link to='/'>Main</Link></p>
    )
}