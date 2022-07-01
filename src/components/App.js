import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomeView from '../views/HomeView';
import EventsView from '../views/EventsView';
import EventSubsView from 'views/EventSubsView';
import EventsViewDetails from 'views/EventsViewDetails';
import NotFoundView from 'views/NotFoundView';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="events" element={<EventsView />}>
          <Route path=":eventId" element={<EventSubsView />} />
        </Route>
        <Route path="events/:eventId/details" element={<EventsViewDetails />} />
        <Route path="*" element={<NotFoundView />} />
      </Route>
    </Routes>
  );
}
