import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate, useParams } from "react-router";

export const Form_registrer_contact = () =>{
    const {store, actions} = useContext(Context);
    let navegar = useNavigate();
    const {id} = useParams();

    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [direccion, setDireccion] = useState("");


    function guardar_Contacto(e) {
        e.preventDefault()
        if (nombre.trim() == "" || telefono.trim() == "" || email.trim() == "" || direccion.trim() == "") {
            alert("Empty fields")
            return null
        }
        const payload = {
            name_contacto: nombre,
            telefono_contacto: telefono,
            email_contacto: email,
            direccion_contacto: direccion
        };
        if (!id) {
            actions.createContact(payload)
        } else {
            actions.editContact(id, payload)
        }
        alert("Se grabo los datos del contacto");
        navigate("/");
        setName("");
        setPhone("");
        setEmail(""),
        setAddress("");

    }


    return(
        <div class="container mt-5">
        <h1 class="mb-4">Añade a un nuevo contacto</h1>
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
            <button type="submit" class="btn btn-primary">Añadir Contacto</button>
        </form>

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