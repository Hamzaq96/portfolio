import Link from 'next/link';

export const Navigation = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href='/'>{"Hamza's Portfolio"}</Link>
            </div>
            <Link href='/projects'>My Projects</Link>
        </div>

    );
};