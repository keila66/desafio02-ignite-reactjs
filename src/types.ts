export interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

export interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export interface SideBarProps {
  setGenreId: (id: number) => void;
  genreId: number;
}

export interface ContentProps {
  genreTitle: string;
  moviesList: MovieProps[];
}
