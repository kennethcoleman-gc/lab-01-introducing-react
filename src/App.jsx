import React, {useState} from "react";
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import Greeting from "./components/Greeting";

const App = () => {
    const [name, setName] = useState([]);

    return (
        <>
            <Container className='bg-light text-center p-2'>
                <label className='p-2' htmlFor='enter-name'>What is your name?</label>
                <input
                    className='p-2'
                    id='enter-name'
                    onChange={({target: {value}}) => setName(value)}
                    placeholder="Enter your name"
                />
            </Container>
            <Container className='text-center p-2'>
                <Greeting name={name}/>
            </Container>
        </>
    );
};

export default App;