import Link from 'next/link';

export const Navigation = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">Hamza's Portfolio</Link>
            </div>
            <Link href="/projects">My Projects</Link>
        </div>
        // <nav>
        //     <ul>
        //         <li>
        //             <Link href="/">Hamza's Portfolio</Link>
        //         </li>
        //         <li>
        //             <Link href="/example">Example</Link>
        //         </li>
        //         <li>
        //             <Link href="/projects">My Projects</Link>
        //         </li>
        //     </ul>
        // </nav>
    );
};