import React, { useEffect } from "react";
import { getMovies } from "../tmdb";


const imageHost = "https://image.tmdb.org/t/p/original/";
function MovieRow({title, path}){
    const {movies, setMovies} = React.useState([]);
    
    const fetchMovies = async (_path) =>{
        try{
            const data = await getMovies(_path);
            setMovies(data?.results);
            console.log("data",data)
        } catch (error) {
        console.log("Fecmovies error", error);
        }
    };
    useEffect(() =>{
      fetchMovies(path)
    }, [path]);
    
    return(
        <div className="row-container">
            <h2 className="row-header">{title}</h2>
            <div className="row-cards">
                {movies?.map(movie =>{
                        return(
                         <img 
                         key={movie.id} 
                         src={`${imageHost}${movie.poster_path}`} 
                         alt={movie.name}>
                            
                         </img>            
                        );
  })}
            </div>
        </div>
    );
}

export default MovieRow