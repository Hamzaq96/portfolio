import Link from 'next/link';

export const Header = () => {
    return (
        <div className="nav-container flex flex-col items-center justify-center md:flex-row md:justify-between">
            <div className="logo mb-2 md:mb-0">
                <Link href="/">{"Hamza's Portfolio"}</Link>
            </div>
            {/* <Link href="/projects">My Projects</Link> */}
        </div>
    );
};