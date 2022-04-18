import axios from "axios";
const ins = axios.create({
	baseURL: "http://localhost:5000/api",
});

export const authAPI = {
	login(email: string, password: string) {
		return ins.post("/auth/login", {
			email,
			password,
		});
	},
	registration(email: string, password: string) {
		return ins.post("/auth/registration", {
			email,
			password,
		});
	},
};
export const contactsAPI = {
	getContacts(userId: string) {
		return ins.get(`/contacts?userId=${userId}`);
	},
	createContact(name: string, phoneNumber: string, userId: string) {
		return ins.post("/contacts", {
			name,
			phoneNumber,
			userId,
		});
	},
	removeContact(id: string) {
		return ins.delete(`/contacts?id=${id}`);
	},
};
