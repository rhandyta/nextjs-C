"use client";
import React, { useState } from "react";
import SectionResult from "./sectionResult";

export default function Cari() {
    const [inputQuery, setInputQuery] = useState("");

    const onSubmit = (e: any) => {
        e.preventDefault();
        const query = e.target[0].value;
        setInputQuery(query);
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="cari user github" />
                <button>cari</button>
            </form>
            {inputQuery && <SectionResult query={inputQuery} />}
        </div>
    );
}
