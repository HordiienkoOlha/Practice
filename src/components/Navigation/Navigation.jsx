import { NavLink, useLocation } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
  const location = useLocation();
  return (
  <>
    {!location.pathname.includes('details') &&
      <nav >
      <ul>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles['active-link'] : styles.link
            }
            to="/"
          >
            Main
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) =>
              isActive ? styles['active-link'] : styles.link
            }
            to="/events">Events</NavLink>
        </li>
          </ul>
          </nav>
      }
      </>
  );
}
