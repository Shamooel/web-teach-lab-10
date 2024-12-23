function Navbar() {
    return (
    <nav className="navbar">
    <div className="navbar-logo">Assignment</div>
    <ul className="navbar-menu">
    <li><a href="/" className="navbar-link">Home</a></li>
                <li className="dropdown">
                </li>
                <li><a href="/about" className="navbar-link">About</a></li>
                <li><a href="/contact" className="navbar-link">Contact</a></li>
                <li><a href="/user/Shamoeel" className="navbar-link">Profile</a></li>
            </ul>
            <div className="navbar-search">
                <input type="text" placeholder="Search..." className="search-input" />
                <button className="search-button">Go</button>
            </div>
        </nav>
    
    );
    }
    export default Navbar;