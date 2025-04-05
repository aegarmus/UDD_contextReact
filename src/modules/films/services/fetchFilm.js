import axios from "axios";

export const fetchAllFilm = async() => {
    try {
        const { data } = await axios.get('http://localhost:3000/api/v1/peliculas');
        return data;
    } catch (error) {
        console.error("Error fetching films:", error);
        throw new Error(error);
    }
}