import { MovieItem } from "./MovieItem";

export const MoviesList = ({ movies }) => (
    <section>
        <ul>
            {movies.map((m, index) =>
                <MovieItem title={m.title} index={index} />)
            }
        </ul>
    </section>
)