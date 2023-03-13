import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday =
        | "christmas"
        | "halloween"
        | "myBday"
        | "thanksgiving"
        | "stPattys";
    const ALPHABETIZE: Record<Holiday, Holiday> = {
        christmas: "halloween",
        halloween: "myBday",
        myBday: "stPattys",
        stPattys: "thanksgiving",
        thanksgiving: "christmas"
    };
    const YEAR: Record<Holiday, Holiday> = {
        stPattys: "myBday",
        myBday: "halloween",
        halloween: "thanksgiving",
        thanksgiving: "christmas",
        christmas: "stPattys"
    };
    const [holiday, setHoliday] = useState<Holiday>("myBday");
    function changeByAlphabet(): void {
        const byAlphabet = ALPHABETIZE[holiday];
        setHoliday(byAlphabet);
    }
    function changeByYear(): void {
        const byYear = YEAR[holiday];
        setHoliday(byYear);
    }
    return (
        <div>
            Initial Holiday: 🎂
            <Button onClick={changeByAlphabet}>Advance by Alphabet</Button>
            <Button onClick={changeByYear}>Advance by Year</Button>
            Holiday:
            {holiday === "myBday" ? <span>🎂</span> : null}
            {holiday === "stPattys" ? <span>🍀</span> : null}
            {holiday === "halloween" ? <span>🎃</span> : null}
            {holiday === "thanksgiving" ? <span>🦃</span> : null}
            {holiday === "christmas" ? <span>🎄</span> : null}
        </div>
    );
}
