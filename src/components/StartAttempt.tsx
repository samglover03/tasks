import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);
    function startQuiz(): void {
        setInProgress(true);
        setNumAttempts(numAttempts - 1);
    }
    function stopQuiz(): void {
        setInProgress(false);
    }
    function mulligan(): void {
        setNumAttempts(numAttempts + 1);
    }
    return (
        <div>
            Number of Attempts: <span>{numAttempts}</span>
            <Button
                onClick={startQuiz}
                disabled={inProgress || numAttempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={inProgress}>
                Mulligan
            </Button>
        </div>
    );
}
