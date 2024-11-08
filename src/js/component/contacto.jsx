import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Ficha_Contacto = ({contacto}) => {

    const {store, actions} = useContext(Context);

    const eliminar_contacto = () =>{
        actions.deleteContact(contacto.id);
    }

    return(
        <div className="contenedor_contacto">
            <img src="https://i.pinimg.com/736x/2a/b8/c1/2ab8c1e5a68ef87faac5ce80d5bfd29d.jpg" width={"120px"} height={"120px"}/>
            <div className="info_contacto">
                <h3>{contacto.nombre}</h3>
                <p>{contacto.direccion}</p>
                <p>{contacto.mail}</p>
            </div>
            <div class="iconos">
                <i class="fas fa-pencil-alt"></i>
                <i class="fas fa-trash-alt"></i>
            </div>
        </div>
    )




}