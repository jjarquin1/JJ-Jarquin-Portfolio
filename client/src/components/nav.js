import React from 'react'

const Navbar = () => {
    return (
        <nav className = 'navbar'>
            <h1>JJ Jarquin</h1>
            <div className='links'>
                <Link to='/main'>Main</Link>
                <Link to ='/aboutMe' style={{
                    color: 'white',
                    backgoundColor:'blue',
                    borderRadius:'8px',
                }}>About Me</Link>
                <Link to='/skills'>Skills</Link>
                <Link to='/projects'>My Projects</Link>
                <Link to='/occupation'>Occupation</Link>
                <Link to='/contact'>Contact Me</Link>
            </div>
        </nav>
    );
}

export default Navbar;