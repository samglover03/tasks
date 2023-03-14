import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [numLeft, setNumLeft] = useState<number>(3);
    const [numRequest, setNumRequest] = useState<string>("");
    const newAttempts = parseInt(numRequest) + numLeft;
    return (
        <div>
            <h3>Give Attempts</h3>
            Number of Attempts Left: {numLeft}
            <Form.Group controlId="formGiveAttempts">
                <Form.Label>Requested Number of Attempts: </Form.Label>
                <Form.Control
                    type="number"
                    value={numRequest}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setNumRequest(event.target.value)
                    }
                />
            </Form.Group>
            <Button
                onClick={() => setNumLeft(numLeft - 1)}
                disabled={numLeft === 0}
            >
                Use
            </Button>
            <Button
                onClick={() => {
                    numRequest === "" ? null : setNumLeft(newAttempts);
                }}
            >
                Gain
            </Button>
        </div>
    );
}
