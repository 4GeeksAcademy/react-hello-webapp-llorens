import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Ficha_Contacto } from "../component/contacto.jsx";

const Lista_Contactos = () =>{

    const {store, actions} = useContext(Context);

    return(
        <div className="w-75 mx-auto">
            <div className="d-flex justify-content-end">
                <Link to="/añadir-contactos">
                    <button className="btn btn-success">Añadir Nuevo Contacto</button>
                </Link>
            </div>
            <ul className="list-group mt-3">
                {store.listaContactos && store.listaContactos.length > 0 && store.listaContactos.map((contacto, index) => {
                    return (
                        <Ficha_Contacto contacto={contacto} key={index} />
                    )
                })}
            </ul>
        </div>
    )

}

export default Lista_Contactos;