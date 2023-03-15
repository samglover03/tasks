import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const COLORS = [
        "red",
        "blue",
        "green",
        "orange",
        "pink",
        "purple",
        "yellow",
        "violet"
    ];
    const DEFAULT_COLOR = COLORS[0];
    const [color, setColor] = useState<string>(DEFAULT_COLOR);
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((currentColor: string) => (
                <Form.Check
                    inline
                    key={currentColor}
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="response"
                    label={currentColor}
                    value={currentColor}
                    checked={color === currentColor}
                    style={{ backgroundColor: currentColor }}
                ></Form.Check>
            ))}
            <span data-testid="colored-box" style={{ backgroundColor: color }}>
                You have chosen {color}
            </span>
        </div>
    );
}
