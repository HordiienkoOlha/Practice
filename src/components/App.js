import { Component } from 'react';
import Button from './Button/Button';
import { getMovies } from 'Services/api';
import MoviesList from './MoviesList';
import { mapper } from 'helpers/mapper';

class App extends Component {
  state = {
    isShow: false,
    movies: [],
    page: 1,
    isLoading: false,
  };
  componentDidUpdate(prevProps, prevState) {
    const { isShow, page } = this.state;
    if (prevState.isShow !== isShow || prevState.page !== page) {
      this.fetchMovies(page);
    }
  }
  onHandle = () => {
    console.log('Click Button');
    this.setState({ isShow: true });
  };
  fetchMovies = page => {
    this.setState({ isLoading: true });
    getMovies(page)
      .then(({ data }) => {
        this.setState(prevState => ({
          movies: [...prevState.movies, ...mapper(data.results)],
        }));
      })
      .catch(error => console.log(error))
      .finally(this.setState({ isLoading: false }));
  };
  onLoadMore = () => {
    let { page } = this.state;
    page += 1;
    this.setState({ page });
  };

  render() {
    const { isShow, movies, isLoading } = this.state;
    return (
      <>
        {!isShow && (
          <Button name={'Show films'} onHandle={this.onHandle}></Button>
        )}
        <MoviesList movies={movies} />
        {isLoading && <h2>Is loading...</h2>}
        {movies.length > 0 && (
          <Button name={'Load more'} onHandle={this.onLoadMore} />
        )}
      </>
    );
  }
}
export default App;
