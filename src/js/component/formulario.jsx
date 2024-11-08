import React from "react";

export const Form_registrer_contact = () =>{

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