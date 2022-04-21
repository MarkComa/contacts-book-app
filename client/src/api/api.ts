import axios from "axios";
const ins = axios.create({
	baseURL: "http://localhost:5000/api",
});

export const authAPI = {
	auth() {
		return ins.get("/auth/auth", {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
	},
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
	createContact(name: string, phoneNumber: string, owner: string) {
		return ins.post("/contacts", {
			name,
			phoneNumber,
			owner,
		});
	},
	editContact(id: string, name:string, phoneNumber:string, owner: string) {
		return ins.post("/contacts/edit", {
			id,
			name,
			phoneNumber,
			owner,
		});
	},
	removeContact(id: string) {
		return ins.delete(`/contacts?id=${id}`);
	},
};
