import MoviesCard from "./MoviesCard"

const MoviesList=({movies})=>{
    return(
        <div className="crd">
            {
                movies.map((el,i,t)=> <MoviesCard el={el}/>)
            }
        </div>
    )
}

export default MoviesList