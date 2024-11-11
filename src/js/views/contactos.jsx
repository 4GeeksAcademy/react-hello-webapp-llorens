import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/contacto.jsx";

const Lista_Contactos = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.obtener_datos();
        actions.crear_lista_contactos();
    }, []);

    return (
        <div>
            {Array.isArray(store.contacts) && store.contacts.length > 0 ? (
                store.contacts.map((contact, index) => (
                    <ContactCard
                        key={index}
                        id={contact.id}
                        name={contact.name}
                        address={contact.address}
                        email={contact.email}
                        phone={contact.phone}
                    />
                ))
            ) : (
                <p>No hay contactos disponibles.</p>
            )}
        </div>
    );
};

export default Lista_Contactos;
