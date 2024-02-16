import { Nav, Navbar, Col, Button, Form, FormControl } from "react-bootstrap";
import Logo from "../assets/logo/logo.png";
import { HouseDoorFill } from "react-bootstrap-icons";
import { BookFill } from "react-bootstrap-icons";
import { useState } from "react";

const Sidebar = () => {
    const [query, setQuery] = useState("");
    // Utilizzo lo useState hook per gestire lo stato di query

    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log("Ricerca con la query:", query);
    };

    return (
        <Col xs={2} className="sidebar-fixed p-0 d-none d-lg-block" style={{ width: "250px" }}>
            <Navbar className="flex-column vh-100 d-flex justify-content-between main-nav" bg="black">
                <div className="mt-4 ms-4">
                    <Navbar.Brand href="#home">
                        <img src={Logo} width="150" height="45" alt="Logo" className="mb-2" />
                    </Navbar.Brand>
                    <Nav className="flex-column mt-4">
                        <Nav.Link href="#home" className="text-secondary fs-5 pe-5">
                            <HouseDoorFill className="icons fs-3 mb-2 me-2" />
                            <span className="icon-text">Home</span>
                        </Nav.Link>
                        <Nav.Link href="#library" className="text-secondary fs-5">
                            <BookFill className="icons fs-3 mb-2 me-2" />
                            <span className="icon-text"> Your Library</span>
                        </Nav.Link>
                        <Form className="mt-4 d-flex" onSubmit={handleSubmit}>
                            <div className="flex-grow-1">
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="no-rounded-right"
                                    value={query} // Associa il valore di query all'input
                                    onChange={(e) => setQuery(e.target.value)}
                                />
                            </div>
                            <Button variant="outline-secondary me-3 no-rounded-left" type="submit">
                                GO
                            </Button>
                        </Form>
                    </Nav>
                </div>
                <div className="mb-3">
                    <Button variant="light" className="mb-2 w-100 rounded-5 btn-outline-dark custom-button-sign border-0">
                        Sign Up
                    </Button>
                    <button type="button" className="custom-button-login btn btn-outline-light w-100 rounded-5 my-2">
                        Login
                    </button>
                    <p className="mt-2 text-secondary">
                        <span style={{ cursor: "pointer" }}>Cookie Policy </span>|
                        <span style={{ cursor: "pointer" }}> Privacy</span>
                    </p>
                </div>
            </Navbar>
        </Col>
    );
};

export default Sidebar;