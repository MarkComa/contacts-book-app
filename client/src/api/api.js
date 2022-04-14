import axios from "axios";
import { contact } from "../components/ContactCard/ContactCard.props";

const ins = axios.create({
	baseURL: "http://localhost:5000/api",
});

export const registration = async (email, password) => {
	try {
		const res = await ins.post("/auth/registration", { email, password });
		console.log(res);
		alert(res.data.message);
	} catch (error) {
		alert(error);
	}
};

// export const userAPI = {};

// export const сontactsAPI = {
// 	getContact() {
// 		return ins.get(`/contact`);
// 	},

// 	pushContact(body: contact) {
// 		return ins.post("/contact", body);
// 	},

// 	removeContact(id: string) {
// 		return ins.delete(`/contact/${id}`);
// 	},
// };
// export const authAPI = {
// 	me() {
// 		return ins.get(`auth/me`);
// 	},
// 	login(email: string, password: string) {
// 		return ins.post(`auth/login`, { email, password });
// 	},
// 	logout() {
// 		return ins.delete(`auth/login`);
// 	},

// 	registration(email: string, password: string) {
// 		try {
// 			return ins.post("/auth/registration", { email, password });
// 		} catch (error) {
// 			alert(error);
// 		}
// 	},
// };
