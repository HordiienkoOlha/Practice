import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w400/${movie.backdrop_path}`}
            alt={movie.title}
          />
          <p>{movie.title}</p>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      backdrop_path: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};
