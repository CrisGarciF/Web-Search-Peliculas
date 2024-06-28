import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import styles from "../css/MovieDetails.module.css"
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { Spinner } from "../Components/Spinner";


export const MovieDetails = () => {
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState(null);

    useEffect(() =>{
        setIsLoading(true);

        get(`/movie/${movieId}`).then((data) =>{
            setIsLoading(false);
            setMovie(data);
        })
    }, [movieId])

    if(isLoading){
        return  <Spinner />;
    }

    const imageURL = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

    return (  
        <div className={styles.detailsContainer}>
            <img className={`${styles.col} ${styles.movieImage}`} src={imageURL} alt={movie.title} />
            <div className={`${styles.col} ${styles.movieDetails}`}>
                <p className={styles.firstItem}><strong>Title: </strong> {movie.title} </p>
                <p><strong>Genres: </strong> {movie.genres.map(genre => genre.name).join(", ")} </p>
                <p><strong>Description: </strong> {movie.overview} </p>
                <p><strong>Date: </strong> {movie.release_date} </p>
            </div>
        </div>
    );
}