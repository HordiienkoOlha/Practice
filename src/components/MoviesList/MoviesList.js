import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => (
  <ul>
    {movies.map(({ backdrop_path, title, id }) => (
      <li key={id}>
        <img
          src={`https://image.tmdb.org/t/p/w400/${backdrop_path}`}
          alt={title}
        />
        <p>{title}</p>
      </li>
    ))}
  </ul>
);

MoviesList.propTypes = {
  id: PropTypes.number,
  backdrop_path: PropTypes.string,
  title: PropTypes.string,
};
export default MoviesList;
