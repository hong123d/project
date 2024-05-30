import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";
import { imageBasePath } from "../../components/constant";
import "./index.css";
const DetailPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`/movie/${movieId}`);
      setMovie(response.data);
    }
    fetchData();
  }, [movieId]);
  console.log(movie);
  if (!movie) return null;
  const releaseYear = movie.release_date
    ? movie.release_date.split("-")[0]
    : "N/A";
  
  const genreNames = movie.genres.map((genre) => genre.name);

  const result = genreNames.join("/");
  return (
    <section className="detail__container">
      <img
        className="detail__img"
        src={`${imageBasePath}${movie.backdrop_path}`}
        alt="detail"
      />
      <div className="detail__description">
        <h2>
          {movie.title} ({releaseYear})
        </h2>
        <p>{movie.overview}</p>
        <div className="detail__additional-info">
          <span>
            <span className="vote_average"> ★ </span>평점: {movie.vote_average}
          </span>
          <span>장르: {result}</span>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;