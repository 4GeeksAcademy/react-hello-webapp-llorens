import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Ficha_Contacto } from "../component/contacto.jsx";
import { Form_registrer_contact } from "../component/formulario.jsx";

export const Home = () => (
	<div className="text-center mt-5">
		<Form_registrer_contact />
	</div>
);
