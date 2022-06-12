export const mapper = movies => {
  return movies.map(({ id, backdrop_path, title }) => ({
    backdrop_path,
    title,
    id,
  }));
};
