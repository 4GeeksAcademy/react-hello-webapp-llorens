import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

export const Form_registrer_contact = () =>{
    const {store, actions} = useContext(Context);
    let navigate = useNavigate();
    const {id} = useParams();

    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [direccion, setDireccion] = useState("");


    function guardar_Contacto(e) {
        e.preventDefault();
        if (nombre.trim() === "" || telefono.trim() === "" || email.trim() === "" || direccion.trim() === "") {
            alert("Empty fields");
            return null;
        }
        const payload = {
            name_contacto: nombre,
            telefono_contacto: telefono,
            email_contacto: email,
            direccion_contacto: direccion
        };
        if (!id) {
            actions.createContact(payload);
        } else {
            actions.editContact(id, payload);
        }
        alert("Se grabaron los datos del contacto");
        navigate("/"); // Cambia navegar por navigate
        setNombre("");
        setTelefono("");
        setEmail("");
        setDireccion("");
    }

    useEffect(() => {
        if (id && store.listaContactos.length > 0) {
            const currentContact = store.listaContactos.find(contact => contact.id == id)
            setNombre(currentContact.nombre)
            setTelefono(currentContact.phone)
            setEmail(currentContact.email)
            setDireccion(currentContact.direccion)
        }
    }, [id, store.listaContactos])


    return(
        <div class="container mt-5">
        <h1 class="mb-4">{!id ? "Añade un Nuevo Contacto" : `Editando a: ${nombre}`}</h1>
        <form onSubmit={guardar_Contacto}>
            <div class="form-group">
                <label for="nombreCompleto">Nombre completo</label>
                <input type="text" class="form-control" id="nombreCompleto" placeholder="Nombre Completo" onChange={(e) => setNombre(e.target.value)} value={nombre} required/>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} required/>
            </div>
            <div class="form-group">
                <label for="telefono">Teléfono</label>
                <input type="tel" class="form-control" id="telefono" placeholder="Teléfono" onChange={(e) => setTelefono(e.target.value)} value={telefono} required/>
            </div>
            <div class="form-group mb-3">
                <label for="direccion">Dirección</label>
                <input type="text" class="form-control" id="direccion" placeholder="Dirección" onChange={(e) => setDireccion(e.target.value)} value={direccion} required/>
            </div>
            <button type="submit" class="btn btn-primary">Añadir Contacto</button>
        </form>
        <Link to="/">volver a Lista de Contactos</Link>
    </div>
    )

}

export const Form_edit_contact = () =>{
    return(
        <div class="container mt-5">
        <h1 class="mb-4">Edita un contacto</h1>
        <form>
            <div class="form-group">
                <label for="nombreCompleto">Nombre completo</label>
                <input type="text" class="form-control" id="nombreCompleto" placeholder="Nombre Completo"/>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" placeholder="Email"/>
            </div>
            <div class="form-group">
                <label for="telefono">Teléfono</label>
                <input type="tel" class="form-control" id="telefono" placeholder="Teléfono"/>
            </div>
            <div class="form-group mb-3">
                <label for="direccion">Dirección</label>
                <input type="text" class="form-control" id="direccion" placeholder="Dirección"/>
            </div>
            <button type="submit" class="btn btn-primary">Completar Edición</button>
        </form>

    </div>
    )
}