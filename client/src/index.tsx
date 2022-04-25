import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function StartApp() {
	return (<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>)
};

const container = document.getElementById("root")  as HTMLDivElement
const root = ReactDOM.createRoot(container!)
root.render(<StartApp />)