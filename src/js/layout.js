import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import  Lista_Contactos  from "./views/contactos.jsx";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Ficha_Contacto } from "./component/contacto.jsx";
import { Form_registrer_contact } from "./component/formulario.jsx";



//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Lista_Contactos />} />
						<Route path="/contactos" element={<Ficha_Contacto />} />
						<Route path="/añadir-contactos" element={<Form_registrer_contact />} />
						<Route path="/editar-contactos/:id" element={<Form_registrer_contact />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
