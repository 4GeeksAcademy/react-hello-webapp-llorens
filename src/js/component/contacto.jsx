import React, { useContext } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const ContactCard = ({ id, name, address, email, phone }) => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const handleDelete = () => {
        actions.eliminar_contacto(id);
    };

    const handleEdit = () => {
        navigate(`/editar-usuario/${id}`);
    };

    return (
        <div className="d-flex justify-content-center my-3">
            <div className="card shadow-sm border-0" style={{ maxWidth: "540px", borderRadius: "12px" }}>
                <div className="row g-0">
                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                        <img
                            src="https://via.placeholder.com/150"
                            className="img-fluid rounded-circle"
                            alt="Contacto"
                            style={{ width: "100px", height: "100px", objectFit: "cover" }}
                        />
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <div className="card-body">
                            <h5 className="card-title fw-bold">{name}</h5>
                            <p className="card-text mb-1 text-muted">{address}</p>
                            <p className="card-text mb-1 text-muted">{email}</p>
                            <p className="card-text mb-0 text-muted">{phone}</p>
                        </div>
                    </div>
                    <div className="col-md-2 d-flex flex-column align-items-center justify-content-center">
                        <FaEdit
                            className="text-primary mb-2"
                            style={{ cursor: "pointer", fontSize: "1.2rem" }}
                            onClick={handleEdit}
                        />
                        <FaTrash
                            className="text-danger"
                            style={{ cursor: "pointer", fontSize: "1.2rem" }}
                            onClick={handleDelete}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
