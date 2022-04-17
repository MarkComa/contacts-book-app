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
		return ins.get(`/contacts?userId=${userId}`);
	},
	createContact(name, phoneNumber,userId) {
		return ins.post("/contacts", {
			name,
			phoneNumber,
			userId
		});
	},
	removeContact(id) {
		return ins.delete(`/contacts?id=${id}`);
	},
};
