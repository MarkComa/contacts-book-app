import axios from "axios";
const ins = axios.create({
	baseURL: "http://localhost:5000/api",
});

export const authAPI = {
	login(email, password) {
		return ins.post("/auth/login", {
			email,
			password,
		});
	},
	registration(email, password) {
		return ins.post("/auth/registration", {
			email,
			password,
		});
	},
};
export const contactsAPI = {
	getContacts(userId) {
		ins.get("/contscts", {
			params: { userId },
		});
	},
	createContact(name, numberPhone) {
		ins.post("/contatcs", {
			name,
			numberPhone,
		});
	},
	removeContacts(id) {
		ins.delete(`/contacts:${id}`);
	},
};
