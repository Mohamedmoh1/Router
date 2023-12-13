import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const MoviesCard=({el})=>{
    return(
        <Link to={`/profil/${el.id}`}>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={el.posterURL} style={{width:'286px',height:'286px'}}/>
        <Card.Body>
            <Card.Title>{el.title}</Card.Title>
            <Card.Text>
            {el.description}
            </Card.Text>
        </Card.Body>
        </Card>
        </Link>
    )
}

export default MoviesCard