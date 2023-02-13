import React from "react";
import "./App.css";
import { Button, Container } from "react-bootstrap";
import logo from "./helloworld.jpeg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>Welcome to My Website!</h1>
            <p>Hello World</p>
            My List:
            <ul>
                <li>Test1</li>
                <li>Test2</li>
                <li>Test3</li>
            </ul>
            <div className="Rectangle">
                <Container>
                    <Row>
                        <div
                            style={{
                                width: 350,
                                height: 25,
                                backgroundColor: "red"
                            }}
                        >
                            <Col>First column.</Col>
                        </div>
                        <div
                            style={{
                                width: 350,
                                height: 25,
                                backgroundColor: "red"
                            }}
                        >
                            <Col>Second column.</Col>
                        </div>
                    </Row>
                </Container>
            </div>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <img src={logo} alt="A picture of Hello, World" />
            <p>Samantha Glover</p>
        </div>
    );
}

export default App;
