import styles from "../css/MovieCard.module.css";
import { Link } from "react-router-dom";
 
export const MovieCard = ({movie}) => {
    const imageURL = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return ( 
        <li className={styles.movieCard} > 
        <Link to={"/movies/" + movie.id} >
            <img className={styles.movieImage} src={imageURL} alt={movie.title} />
            <h2> {movie.title} </h2>
        </Link>
        </li> 
    );
}