import React from "react";

function TopBar(){

    const goHome = (event) => {
        console.log("Go Home");
        window.location.href = '/';
    }
    const goAboutMe = (event) => {
        console.log("Go Home");
        window.location.href = '/';
    }
    const goLogin = (event) => {
        console.log("Go Home");
        window.location.href = '/login';
    }
    return (
        <div className="Topbar">
            <img src="src/assets/logo.png" className="logo" />
            <div>
                <button className="BtnToopbar" onClick={goHome}>Home</button>
                <button className="BtnToopbar" onClick={goAboutMe}>About Me</button>
                <button className="BtnToopbar" onClick={goLogin}>Login</button>
            </div>
        </div>
    )
}

export default TopBar;