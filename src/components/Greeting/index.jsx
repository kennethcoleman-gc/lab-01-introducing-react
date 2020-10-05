import React from "react";
import {Container} from "react-bootstrap";

const Greeting = (props) => {
    return (
        <>
            <Container className='bg-light p-2'>
                <h1>Greetings{props.name.length ? " " + props.name : ""}!</h1>
                <h2>Welcome{props.name.length ? " " + props.name : ""}, I hope you like bacon.</h2>
            </Container>
        </>
    );
};

export default Greeting;