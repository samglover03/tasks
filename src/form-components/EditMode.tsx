import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [inEditMode, setEditMode] = useState<boolean>(false);
    const [yourName, setYourName] = useState<string>("Your Name");
    const [isStudent, setStudent] = useState<boolean>(true);
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setYourName(event.target.value);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="in-edit-check"
                label="Edit Mode?"
                checked={inEditMode}
                onChange={() => setEditMode(!inEditMode)}
            />
            {inEditMode ? (
                <div>
                    <Form.Group controlId="formStudentName">
                        <Form.Label>Your Name:</Form.Label>
                        <Form.Control value={yourName} onChange={updateName} />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Is Student?"
                        checked={isStudent}
                        onChange={() => setStudent(!isStudent)}
                    />
                </div>
            ) : (
                <span>
                    {yourName} is {isStudent ? "" : "not"} a student
                </span>
            )}
        </div>
    );
}
