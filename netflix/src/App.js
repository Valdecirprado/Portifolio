import React, {useEffect, useState} from 'react';
import './App.css';
import MovieRow from './componets/MovieRow';
import categorias from './tmdb';


function App() {
    return(
    <div className="App">
        {categorias.map((category) =>{
              return( <MovieRow 
              key={category.name} 
              title={category.title}
                path={category.path}/>
       ) })}
    </div>
    );
}

export default App;