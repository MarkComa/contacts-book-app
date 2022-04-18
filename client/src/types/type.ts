export type userType = {
	id: string;
	email: string;
	password: string;
	contact: contactsType;
};
export type contactsType = {
	_id: string;
	owner: string;
	name: string;
	phoneNumber: string;
};
export type authUserType = {
	email: string;
	password: string;
};
