import { useState, useEffect } from "react";
import { Container, Row, Col, Nav, Card, Button } from "react-bootstrap";
import Sidebar from "./Sidebar";
import { Heart, HeartFill } from "react-bootstrap-icons";

function MainComponent() {
    const [acdcTracks, setAcdcTracks] = useState([]);
    const [lanaDelReyTracks, setLanaDelReyTracks] = useState([]);
    const [drakeTracks, setDrakeTracks] = useState([]);
    const [likedTracks, setLikedTracks] = useState({});


    useEffect(() => {
        fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=acdc`)
            .then((response) => response.json())
            .then((data) => setAcdcTracks(data.data.slice(0, 4)));

        fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=lana del rey`)
            .then((response) => response.json())
            .then((data) => setLanaDelReyTracks(data.data.slice(0, 4)));

        fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=drake`)
            .then((response) => response.json())
            .then((data) => setDrakeTracks(data.data.slice(0, 4)));
    }, []);

    const handleLike = (e, trackId) => {
        e.stopPropagation();
        const updatedLikedTracks = { ...likedTracks };
        if (likedTracks[trackId]) {
            delete updatedLikedTracks[trackId];
        } else {
            updatedLikedTracks[trackId] = true;
        }
        setLikedTracks(updatedLikedTracks);
    };

    const handleClick = (track) => {

        console.log("Traccia selezionata:", track);
    };

    return (
        <Container fluid className="main-container">
            <Row>
                <Sidebar />
                <Col className="main-content">
                    <Row className="mb-4 mt-3">
                        <Col>
                            <Nav className="justify-content-center d-none d-sm-flex">
                                <Nav.Item>
                                    <Nav.Link href="#" className="main-links me-3">
                                        TRENDING
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#" className="main-links me-3">
                                        PODCAST
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#" className="main-links me-3">
                                        MOODS AND GENRES
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#" className="main-links me-3">
                                        NEW RELEASES
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#" className="main-links">
                                        DISCOVER
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>
                    <>
                        <Row className="mb-4">
                            <h2 className="mb-4 text-white">Rock Classics</h2>
                            {acdcTracks.map((track) => (
                                <Col key={track.id}>
                                    <Card className="custom-card bg-transparent border-1 rounded-3 card-hover mx-1" onClick={() => handleClick(track)}>
                                        <Card.Img variant="top" src={track.album.cover_big} className="rounded-0" />
                                        <Card.Body>
                                            <Card.Title className="text-white">
                                                {track.title}{" "}
                                                <Button
                                                    variant="outline-light"
                                                    className="border-0 p-0 px-2 rounded-5 mb-1"
                                                    onClick={(e) => handleLike(e, track.id)}
                                                >
                                                    {likedTracks[track.id] ? (
                                                        <HeartFill className="fs-5" style={{ marginTop: "-3px" }} />
                                                    ) : (
                                                        <Heart className="fs-5" style={{ marginTop: "-3px" }} />
                                                    )}
                                                </Button>
                                            </Card.Title>{" "}
                                            <Card.Subtitle className="mb-2 text-secondary">{track.artist.name}</Card.Subtitle>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                        <Row className="mb-4">
                            <h2 className="mb-4 text-white">Pop Culture</h2>
                            {lanaDelReyTracks.map((track) => (
                                <Col key={track.id}>
                                    <Card className="custom-card bg-transparent border-1 rounded-3 card-hover mx-1" onClick={() => handleClick(track)}>
                                        <Card.Img variant="top" src={track.album.cover_big} className="rounded-0" />
                                        <Card.Body>
                                            <Card.Title className="text-white">
                                                {track.title}{" "}
                                                <Button
                                                    variant="outline-light"
                                                    className="border-0 p-0 px-1 rounded-5 mb-1"
                                                    onClick={(e) => handleLike(e, track.id)}
                                                >
                                                    {likedTracks[track.id] ? (
                                                        <HeartFill className="fs-5" style={{ marginTop: "-3px" }} />
                                                    ) : (
                                                        <Heart className="fs-5" style={{ marginTop: "-3px" }} />
                                                    )}
                                                </Button>
                                            </Card.Title>{" "}
                                            <Card.Subtitle className="mb-2 text-secondary">{track.artist.name}</Card.Subtitle>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                        <Row className="mb-4">
                            <h2 className="mb-4 text-white">#HipHop</h2>
                            {drakeTracks.map((track) => (
                                <Col key={track.id}>
                                    <Card className="custom-card bg-transparent border-1 rounded-3 card-hover mx-1" onClick={() => handleClick(track)}>
                                        <Card.Img variant="top" src={track.album.cover_big} className="rounded-0" />
                                        <Card.Body>
                                            <Card.Title className="text-white">
                                                {track.title}{" "}
                                                <Button
                                                    variant="outline-light"
                                                    className="border-0 p-0 px-1 rounded-5 mb-1"
                                                    onClick={(e) => handleLike(e, track.id)}
                                                >
                                                    {likedTracks[track.id] ? (
                                                        <HeartFill className="fs-5" style={{ marginTop: "-3px" }} />
                                                    ) : (
                                                        <Heart className="fs-5" style={{ marginTop: "-3px" }} />
                                                    )}
                                                </Button>
                                            </Card.Title>{" "}
                                            <Card.Subtitle className="mb-2 text-secondary">{track.artist.name}</Card.Subtitle>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </>
                </Col>
            </Row>
        </Container>
    );
}

export default MainComponent;