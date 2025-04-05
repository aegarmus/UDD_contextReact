

export const CardFilm = ({ film }) => {
    return (
        <div className="card">
            
            <h2>{film.title}</h2>
            <p>{film.director}</p>
            <p>Estreno: {film.ano_estreno}</p>
            <p>duración {film.duracion}min</p>
            <p>critica: {film.puntahje_critica}</p>
        </div>
    );
}