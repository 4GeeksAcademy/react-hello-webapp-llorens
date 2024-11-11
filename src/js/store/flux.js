const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: []
        },
        actions: {
            crear_contacto: async (contacto) => {
                fetch("https://playground.4geeks.com/contact/agendas/llorens-contactos/contacts/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(contacto)
                })
                .then(response => response.json())
                .then(data => {
                    console.log("Success:", data);
                    setStore({ contacts: [...getStore().contacts, data] });
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
            },
            obtener_datos: async () => {
                fetch("https://playground.4geeks.com/contact/agendas/llorens-contactos/contacts/")
                .then(response => response.json())
                .then(data => {
                    console.log("Fetched contacts:", data);
                    setStore({ contacts: data.contacts }); // Aquí se asegura de que contacts sea un array
                })
                .catch((error) => {
                    console.error("Error fetching contacts:", error);
                });
            },
            eliminar_contacto: async (id) => {
                fetch(`https://playground.4geeks.com/contact/agendas/llorens-contactos/contacts/${id}`, {
                    method: "DELETE"
                })
                .then(response => {
                    if (response.ok) {
                        setStore({ contacts: getStore().contacts.filter(contact => contact.id !== id) });
                        console.log("Contact deleted successfully");
                    } else {
                        console.error("Failed to delete contact");
                    }
                })
                .catch((error) => {
                    console.error("Error deleting contact:", error);
                });
            },
            actualizar_contacto: async (id, contacto) => {
                fetch(`https://playground.4geeks.com/contact/agendas/llorens-contactos/contacts/${id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(contacto)
                })
                .then(response => response.json())
                .then(data => {
                    console.log("Contact updated successfully:", data);
                    setStore({ contacts: getStore().contacts.map(contact => contact.id === id ? data : contact) });
                })
                .catch((error) => {
                    console.error("Error updating contact:", error);
                });
            },
            crear_lista_contactos: async () => {
                fetch("https://playground.4geeks.com/contact/agendas/llorens-contactos", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ agenda_name: "llorens-contactos" })
                })
                .then(response => response.json())
                .then(data => {
                    console.log("Contact list created successfully:", data);
                })
                .catch((error) => {
                    console.error("Error creating contact list:", error);
                });
            }
        }
    };
};

export default getState;
