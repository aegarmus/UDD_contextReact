import { useEffect, useState } from "react"
import { fetchAllFilm } from "../services/fetchFilm";
import { CardFilm } from "../components/CardFilm";


export const AllFilmPage = () => {
    const [ films, setFilms ] = useState([]);

    useEffect(() => {
        const fetchFilms = async() => {
            const films = await fetchAllFilm();
            setFilms(films.data);
        }

        fetchFilms();
    }, []);

    return (
        <>
            <div className="film-container">
                {
                    films.map(film => (
                        <CardFilm key={ film._id } film={ film } />
                    ))
                }
            </div>
        </>
    )
}