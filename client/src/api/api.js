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
			password });
	},
};

export const createContact = async (name, numberPhone) => {
	try {
		await axios
			.post("http://localhost:5000/api/contacts", {
				name,
				numberPhone,
			})
			.then((res) => console.log(res));
	} catch (error) {
		console.log(error);
	}
};
export const getContacts = async (userId) => {
	try {
		await axios
			.get("http://localhost:5000/api/contacts", {
				params: { userId },
			})
			.then((res) => console.log(res.data));
	} catch (error) {
		console.log(error);
	}
};
export const removeContact = async (id) => {
	try {
		await axios
			.post(`http://localhost:5000/api/contacts:${id}`)
			.then(() => {
				/* вызываем функцию получения списка контактов */
			});
	} catch (error) {
		console.log(error);
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
