import axios from 'axios';

const API_KEY = "9cTjAjlRB53wyhAFk5VzXcBu5GiPU6fK";
axios.defaults.baseURL = "https://app.ticketmaster.com/discovery/v2/";

export async function fetchEvents() {
    const responce = await axios.get(`events?size=20&apikey=${API_KEY}`)
    return responce.data._embedded.events;
}

export async function fetchEventById(id) {
    const responce = await axios.get(`events/${id}?apikey=${API_KEY}`)
    return responce.data;
}