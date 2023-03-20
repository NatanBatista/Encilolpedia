import React from "react";
import Footer from "./Footer";
import NavBar from "./Navbar";

import PropTypes from "prop-types";


MainContainer.propTypes = {
	children: PropTypes.node.isRequired,
};


export default function MainContainer(props) {
	return (
		<>
			<NavBar/>
			<div> {props.children} </div>
			<Footer/>
		</>
	);
}
