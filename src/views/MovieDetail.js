import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { MoviesService } from "../api/MoviesService";

export const MovieDetail = () => {
    const { id } = useParams();

    const [movie, setMovie] = useState({});
    const fetchMovieDetail = async () => {
        const { data } = await MoviesService.getMovieById(id);
        setMovie(data);
    }

    useEffect(() => {
        fetchMovieDetail();
    });

    return (
        <>
            <h1>{movie.title}</h1>

            <article>
                {movie.overview}
            </article>
        </>
    )
}