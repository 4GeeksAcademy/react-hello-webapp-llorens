const getState = ({ getStore, getActions, setStore }) => { 
    return {
        store: {
            listaContactos: [] 
        },
        actions: {
            createUser: () => {
                fetch("https://playground.4geeks.com/contact/agendas/llorens-contactos", {
                    method: "POST",

                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);

                    })
                    .catch((error) => console.log(error));
            },

            getInfoContacts: () => {
                fetch("https://playground.4geeks.com/contact/agendas/llorens-contactos/contacts", {
                    method: "GET"
                })
                    .then((response) => {
                        if (response.status == 404) {
                            getActions().createUser()
                        }
                        if (response.ok) {
                            return response.json()
                        }
                    })
                    .then((data) => {
                        if (data) {
                            setStore({ listaContactos: data.contacts })
                        }
                    }) 
                    .catch((error => console.log(error)))
            },

            addContactToList: (contact) => {
                const store = getStore();
                setStore({ ...store, listaContactos: [...store.listaContactos, contact] })
            },

            createContact: (payload) => {
                fetch("https://playground.4geeks.com/contact/agendas/llorens-contactos/contacts", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(
                        payload
                    ),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        const actions = getActions(); 
                        actions.addContactToList(data);
                        console.log("Contacto Añadido:", data);
                    })
                    .catch((error) => console.log(error));
            },
            deleteContact: (id) => {
                fetch(`https://playground.4geeks.com/contact/agendas/llorens-contactos/contacts/${id}`, {
                    method: "DELETE",
                })
                    .then((response) => {
                        console.log(response)
                        if (response.ok) {
                            const store = getStore();
                            const updatedContacts = store.listaContactos.filter(contact => contact.id !== id);
                            setStore({ listaContactos: updatedContacts });
                            console.log(`Contacto con ID ${id} borrado`);
                        } else {
                            console.log("Error al eliminar al contacto");
                        }
                    })
                    .catch((error) => console.log(error));
            },

            editContact: (id, contact) => {
                const store = getStore()
                fetch(`https://playground.4geeks.com/contact/agendas/llorens-contactos/contacts/${id}`, {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(contact)
                })
                    .then((response) => {
                        if (response.ok) {
                            return response.json()
                        }
                    })
                    .then((data) => {
                        if (data) {
                            const updatedList = store.listaContactos.map(contact => {
                                if (contact.id == id) {
                                    contact = data
                                }
                                return contact
                            })
                            setStore({ listaContactos: updatedList })
                        }
                    })
                    .catch((error) => console.log(error));


            }
        }
    }
};

export default getState;