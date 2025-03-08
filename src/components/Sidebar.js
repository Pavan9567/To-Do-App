import React, { useState } from "react";
import { Button, Offcanvas } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Sidebar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="d-md-none m-3"><i className="bi bi-list"></i></Button>

            <div className="d-none d-md-block bg-light vh-100 p-4">
                <h3 className="mb-4">Do It</h3>
                <ul className="list-unstyled">
                    <li className="mb-2">
                        <a href="#all-tasks" className="text-decoration-none text-dark">All Tasks</a>
                    </li>
                    <li className="mb-2">
                        <a href="#today" className="text-decoration-none text-dark">Today</a>
                    </li>
                    <li className="mb-2">
                        <a href="#important" className="text-decoration-none text-dark">Important</a>
                    </li>
                    <li className="mb-2">
                        <a href="#planned" className="text-decoration-none text-dark">Planned</a>
                    </li>
                    <li className="mb-2">
                        <a href="#assigned-to-me" className="text-decoration-none text-dark">Assigned to me</a>
                    </li>
                </ul>
            </div>

            <Offcanvas show={show} onHide={handleClose} responsive="md">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Do It</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className="list-unstyled">
                        <li className="mb-2">
                            <a href="#all-tasks" className="text-decoration-none text-dark">All Tasks</a>
                        </li>
                        <li className="mb-2">
                            <a href="#today" className="text-decoration-none text-dark">Today</a>
                        </li>
                        <li className="mb-2">
                            <a href="#important" className="text-decoration-none text-dark">Important</a>
                        </li>
                        <li className="mb-2">
                            <a href="#planned" className="text-decoration-none text-dark">Planned</a>
                        </li>
                        <li className="mb-2">
                            <a href="#assigned-to-me" className="text-decoration-none text-dark">Assigned to me</a>
                        </li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Sidebar;