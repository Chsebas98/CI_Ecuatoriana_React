import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "../Pages/Register";

const LoginRouter = () => {
	return (
		<Router>
			<Routes>
				<Route end path="/" element={<Register />}></Route>
			</Routes>
			<Routes>
				<Route end path="/register" element={<Register />}></Route>
			</Routes>
		</Router>
	);
};

export default LoginRouter;
