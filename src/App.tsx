import { useEffect, useState } from "react";
import { SideBar } from "./components/SideBar";
import { Content } from "./components/Content";

import { GenreResponseProps, MovieProps } from "./types";

import { api } from "./services/api";

import "./styles/global.scss";

import "./styles/sidebar.scss";
import "./styles/content.scss";

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  );
  useEffect(() => {
    api
      .get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`)
      .then((response) => {
        setMovies(response.data);
      });
  }, [selectedGenreId]);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar genreId={selectedGenreId} setGenreId={setSelectedGenreId} />
      <Content genreTitle={selectedGenre.title} moviesList={movies} />
    </div>
  );
}
