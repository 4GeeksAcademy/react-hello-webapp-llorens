import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

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
                <p>{contacto.phone}</p>
            </div>
            <div class="iconos">
                <Link to={"/editar-contactos/" + contacto.id}>
                    <i class="fas fa-pencil-alt"></i>
                </Link>
                <button type="button" data-bs-toggle="modal" data-bs-target={"#delete-contact-" + contacto.id} >
                    <i class="fas fa-trash-alt"></i>
                </button>
                <div className="modal fade" id={"delete-contact-" + contacto.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">¿Estas seguro?</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    Si eliminas este contacto, no podrás recuperarlo
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cancelar</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={eliminar_contacto}>Borrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )




}