import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

const Form_Contact_Page = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const { id } = useParams();
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        phone: "",
        email: ""
    });

    useEffect(() => {
        if (id) {
            const contact = store.contacts.find(contact => contact.id === parseInt(id));
            if (contact) {
                setFormData(contact);
                setIsEditing(true);
            }
        }
    }, [id, store.contacts]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            actions.actualizar_contacto(id, formData);
        } else {
            actions.crear_contacto(formData);
        }
        navigate("/");
    };

    return (
        <div>
            <h1>{isEditing ? "Editar Contacto" : "Añadir Contacto"}</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="name" placeholder="Introduce tu nombre" value={formData.name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Dirección</label>
                    <input type="text" className="form-control" id="address" placeholder="Introduce tu dirección" value={formData.address} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Teléfono</label>
                    <input type="tel" className="form-control" id="phone" placeholder="Introduce tu teléfono" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Introduce tu email" value={formData.email} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">{isEditing ? "Actualizar Contacto" : "Añadir Contacto"}</button>
            </form>
            <Link to="/">
                <a>Volver a la selección de contactos</a>
            </Link>
        </div>
    );
};

export default Form_Contact_Page;
