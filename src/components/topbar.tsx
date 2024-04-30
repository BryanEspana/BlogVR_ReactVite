import React from "react";

function TopBar(){
    return (
        <div className="Topbar">
            <img src="src/assets/logo.png" className="logo" />
            <div>
                <a href="/register">Home</a>
                <a href="/login">Login</a>
            </div>
        </div>
    )
}

export default TopBar;