import { useState } from 'react';
import './App.css';
import MoviesList from './Comp/MoviesList';
import NavMovies from './Comp/NavMovies';                                                   
import { Route, Routes } from 'react-router-dom';
import Home from './Comp/Home';
import Profil from './Comp/Profil';

function App() {
  const[movies,setmovies] = useState([
    {title : "Unstoppable", description : "based on the real-life CSX 8888 incident, telling the story of a runaway freight train and the two men who attempt to stop it" , id : Math.random() , posterURL : "https://images.moviesanywhere.com/5795f26081df5750d76dcb2f9c269095/24b6851e-47eb-4167-bd2e-27d372e4a443.jpg", trailer : "https://www.youtube.com/embed/-vtodfBAM1Q?si=Zs0o653-JTeJ3EJy"},
    {title : "Fast Five", description : "Brian O'Conner, an LAPD officer, goes undercover in the street racing world to investigate a group of unknown truck hijackers, believed to be led by Dominic Toretto", id : Math.random(), posterURL : "https://resizing.flixster.com/YqGlUJwJoka2YByHvwSSjOl_xC8=/300x300/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8338313_p_v10_bb.jpg", trailer : "https://www.youtube.com/embed/vcn2GOuZCKI?si=3s3pepGtTK6AMwEb"},
  ])
  return (
    <div>
    <NavMovies/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/MoviesList' element={<MoviesList movies={movies}/>}/>
      <Route path='/profil/:id' element={<Profil movies={movies}/>}/>
    </Routes>
    </div>
  );
}

export default App;
