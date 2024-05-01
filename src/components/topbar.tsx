import React from "react";

function TopBar(){
    return (
        <div className="Topbar">
            <img src="src/assets/logo.png" className="logo" />
            <div>
                <button className="BtnToopbar">Home</button>
                <button className="BtnToopbar">About Me</button>
                <button className="BtnToopbar">Login</button>
            </div>
        </div>
    )
}

export default TopBar;