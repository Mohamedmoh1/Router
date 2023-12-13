import { useNavigate, useParams } from "react-router-dom"

const Profil=({movies})=>{
    var {id} = useParams()
    var found = movies.find((el,i,t)=>el.id === Number(id))
    const navgate = useNavigate()
    return(
        <div>
            <h1>Profil</h1>
            <h2>{found.title}</h2>
            <img src={found.posterURL}/>
            <h3>{found.description}</h3>
            <iframe width="560" height="315" src={found.trailer} allowfullscreen></iframe>
            
            <button onClick={()=>navgate("/")}>Home</button>        
        </div>
    )
}

export default Profil