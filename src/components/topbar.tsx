import React from "react";
import logoImage from '../assets/logo.png';

function TopBar(){

    const goHome = (event) => {
        console.log("Go Home");
        window.location.href = '/';
    }

    const goLogin = (event) => {
        console.log("Go Home");
        window.location.href = '/login';
    }
    const logout = (event) =>{
        localStorage.removeItem('user');
        localStorage.removeItem('isActive');
        window.location.href = '/';
    }
    const createBlog = (event) =>{
        window.location.href = '/admin/createBlog';

    }

    const isAdmin = localStorage.getItem('isActive')  === 'true';

    return (
        <div className="Topbar">
            <img src={logoImage} className="logo" />
            <div>
                <button className="BtnToopbar" onClick={goHome}>Home</button>
                {isAdmin && (<button className="BtnToopbar" onClick={createBlog}>Crear blog</button>)}
                {!isAdmin && (<button className="BtnToopbar" onClick={goLogin}>Login</button>)}
                {isAdmin && (<button className="BtnToopbar" onClick={logout}>Cerrar sesión</button>)}

            </div>
        </div>
    )
}

export default TopBar;