import React from "react";
import {Container} from "react-bootstrap";

const Greeting = (props) => {
    return (
        <>
            <Container className='bg-light p-2 border border-dark'>
                <h1>Greetings{props.name.length ? " " + props.name : ""}!</h1>
                <h2>Welcome{props.name.length ? " " + props.name : ""}, I <strong className='text-danger'>hope</strong> you like bacon.</h2>
            </Container>
        </>
    );
};

export default Greeting;