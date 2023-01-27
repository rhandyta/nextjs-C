"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const handleClickUrl = (url: string) => {
        router.push(url);
    };
    return (
        <html>
            <head />
            <body>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/dashboard">Dashboard</Link>
                    </li>
                    <li onClick={() => handleClickUrl("/settings")}>
                        Settings
                    </li>
                    <li>
                        <Link href="/errorhandling">Error Handling</Link>
                    </li>
                </ul>
                {children}
            </body>
        </html>
    );
}
