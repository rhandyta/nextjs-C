import React from "react";

function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div>ini layout khusus dashboard</div>
            {children}
        </>
    );
}

export default layout;
