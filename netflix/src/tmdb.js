const API_KEY = '60962f340daf34a75a7af39b9f1c89b1';

const categorias = [
    {
        name:"trending",
        title: "Em alta",
        path:`/trending/all/week?api_key=${API_KEY}&language=pt-BR`
    }, 
    {
        name:"netflixOriginals",
        title: "Originais Netflix",
        path:`/discover/tv?api_key=${API_KEY}&with_network=213`
    },
    {
        name:"topRated",
        title: "Populares",
        path:`/movie/top_rated?api_key=${API_KEY}&language=pt-BR`
    },
    {
        name:"comedy",
        title: "Comedia",
        path:`/discover/tv?api_key=${API_KEY}&with_genres=35`
    },
    {
        name:"romances",
        title: "Romances",
        path:`/discover/tv?api_key=${API_KEY}&with_genres=1074`
    },
    {
        name:"documentaries",
        title: "Documentario",
        path:`/discover/tv?api_key=${API_KEY}&with_genres=99`
    },
];

export const getMovies = async (path) =>{
    try{
        let url = `https://api.themoviedb.org/3/movie/550?api_key=60962f340daf34a75a7af39b9f1c89b1`;
        const response = await fetch(url);
        return await response.json();
    }catch (error){
        console.log("error getmovies: ", error);
    }
};


export default categorias;