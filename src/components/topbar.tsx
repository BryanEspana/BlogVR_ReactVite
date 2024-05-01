import React from "react";

function TopBar(){
    return (
        <div className="Topbar">
            <img src="src/assets/logo.png" className="logo" />
            <div>
                <button></button>
                <a href="/login">Login</a>
            </div>
        </div>
    )
}

export default TopBar;