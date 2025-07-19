import './App.css';
import React from 'react';

interface Movie {
  id: number;
  title: string;
  genre_ids: number[];
  overview: string;
  poster_path: string;
}

function App() {
  const [movies, setMovies] = React.useState<Movie[]>([]);

  async function fetchPopularMovies(): Promise<Movie[]> {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=c4d2c6fc867d1a65d5382f3f2424e1aa`
    );
    const data = await res.json();
    return data.results;
  }

  React.useEffect(() => {
    fetchPopularMovies().then(setMovies).catch(console.error);
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
