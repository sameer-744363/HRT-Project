import React from 'react';


const App = () => {
    return (
        <>
            {/* Navbar */}
            <header className="nav-bar">
                <div className="logo"><b>Logo</b></div>
                <input type="text" className="search-box" placeholder="Find Vendors, Services, or Products" />
                <nav className='navMenu'>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Features</a>
                    <a href="#">Pricing</a>
                    <button className="btn-primary">Post Project</button>
                    <button className="btn-secondary">Vendor Signup</button>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="landing-container">
                <div className="hero-content">
                    <p className="hero-text">
                        Find the Best <br />
                        <span className="highlight">IT Services, Products & Solutions</span>
                    </p>
                    <div className="buttons">
                        <button className="post-project">Post Your Project</button>
                        <button className="join-vendor">Join as a Vendor</button>
                    </div>
                    <input type="text" className="search-box2" placeholder="Find Vendors, Services, or Products" />
                </div>
                <img src="https://plus.unsplash.com/premium_photo-1683288706157-9913483dffc8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlnaXRhbCUyMHN0b3JlfGVufDB8fDB8fHww" alt="IT Services" className="hero-image" />
            </section>
        </>
    );
};

export default App;
