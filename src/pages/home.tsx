import React from "react";

function Home(){
    return (
        <div className="HomePage">
            <img src="src/assets/fondo.png" className="imgHome"/>
            <h1 className="TextImg animate__animated animate__backInDown">EXPLORANDO LA REALIDAD VIRTUAL</h1>
            <div className="Blogs">
                <div className="CardsBlog">
                    <img src="src/assets/avatares.png" />
                    <h2>LOS AVATARES DE REALIDAD VIRTUAL DE FACEBOOK & OCULUS Y SU EVOLUCIÓN</h2>
                    <p className="Fecha">1 Nov 2022 | Realidad Virtual, Realidad Virtual Social</p>
                    <p className="multiline-truncate">La figura del avatar como representación gráfica de un usuario en el metaverso, ha evolucionado a...ha evolucionado a... un usuario en el metaverso, ha evolucionado a...ha evolucionado a... un usuario en el metaverso, ha evolucionado a...ha evolucionado a... un usuario en el metaverso, ha evolucionado a...ha evolucionado a...</p>
                </div>
            </div>
            
        </div>
    )
}

export default Home;