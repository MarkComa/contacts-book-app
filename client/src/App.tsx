import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { ContactsBook } from "./screens/ContactsBook/ContactsBook";
import { Login } from "./screens/Login/Login";
import { Registration } from "./screens/Registration/Registration";

function App() {
	return (
		<Layout className="App">
			<Routes>
				<Route path="/" element={<ContactsBook />} />
				<Route path="/registration" element={<Registration />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</Layout>
	);
}

export default App;
