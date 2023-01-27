"use client";
import React, { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        console.log(error);
    }, [error]);
    return (
        <div>
            <p>Error</p>
            <button onClick={reset}>Try again</button>
        </div>
    );
}
