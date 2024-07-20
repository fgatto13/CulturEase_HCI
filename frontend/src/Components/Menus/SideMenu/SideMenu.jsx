import React from "react";

const SideMenu =()=>{
    return(
        <div className="SideMenu">ì
            <div className="burgerMenu">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <nav className="reactive">
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/bacheca"}>Bacheca</Link></li>
                    <li>
                        <Link to={"/login"}>
                            {sessionStorage.getItem('isLoggedIn')==='true' ? ('Account'):('Login')}
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default SideMenu;