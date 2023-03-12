import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [quizType, setQuizType] = useState<QuestionType>(
        "short_answer_question"
    );
    function changeQuizType(): void {
        setQuizType(
            quizType === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    }
    return (
        <div>
            <Button onClick={changeQuizType}>Change Type</Button>
            {quizType === "short_answer_question" ? (
                <span>Short Answer</span>
            ) : (
                <span>Multiple Choice</span>
            )}
        </div>
    );
}
