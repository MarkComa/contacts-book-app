import axios from "axios";
import { contact } from "../components/ContactCard/ContactCard.props";

const ins = axios.create({
	baseURL: "http://localhost:5000",
});

export const userAPI = {};

export const сontactsAPI = {
	getContact() {
		return ins.get(`/contact`);
	},

	pushContact(body: contact) {
		return ins.post("/contact", body);
	},

	removeContact(id: string) {
		return ins.delete(`/contact/${id}`);
	},
};
export const authAPI = {
	me() {
		return ins.get(`auth/me`);
	},
	login(email: string, password: string) {
		return ins.post(`auth/login`, { email, password });
	},
	logout() {
		return ins.delete(`auth/login`);
	},

	registration(email: string, password: string) {
		return ins.post("/auth/registration", { email, password });
	},
};
