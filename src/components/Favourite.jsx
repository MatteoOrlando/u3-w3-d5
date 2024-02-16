import 'bootstrap/dist/css/bootstrap.min.css'
import { HeartFill } from "react-bootstrap-icons";
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { unlikeTrack } from '../redux/actions/favouriteTracksAction'
import {
    Container,
    Row,
    Col,
    ListGroup,
    ListGroupItem,
    Button,
} from 'react-bootstrap';

const Favourite = () => {
    const favourites = useSelector((state) => state.favourite.lis)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <Container><Row><Col><h1>Favorites Songs</h1>
            <Button onClick={() => navigate("/")}>Home</Button>
        </Col>
            <Col xs={10} className="mx-auto my-3">
                <ListGroup>
                    {favourites.map((fav, i) => (
                        <ListGroupItem key={i}>
                            <HeartFill
                                className="mr-2"
                                onClick={() => dispatch(unlikeTrack(fav))}
                            />
                            <Link to={'/' + fav}>{fav}</Link>
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </Col>
        </Row>
        </Container>
    )
}

export default Favourite



