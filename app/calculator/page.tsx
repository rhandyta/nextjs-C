"use client";
import React, { useState } from "react";

export default function Calculator() {
    const [angka1, setAngka1] = useState(0);
    const [angka2, setAngka2] = useState(0);
    const [hasil, setHasil] = useState(0);
    return (
        <div>
            <form>
                <input
                    type="number"
                    onChange={(e) => setAngka1(Number(e.target.value))}
                    value={angka1}
                />
                <input
                    type="number"
                    onChange={(e) => setAngka2(Number(e.target.value))}
                    value={angka2}
                />
                <button type="button" onClick={() => setHasil(angka1 + angka2)}>
                    Hitung
                </button>
                <p>Total: {hasil}</p>
            </form>
        </div>
    );
}
