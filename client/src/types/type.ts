import { InputsType } from '../components/CreateContact/CreateContact';

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
export type reqContactsType = {
	owner: string;
	data: InputsType
};
export type authUserType = {
	email: string;
	password: string;
};
export type resultResType = {
	message: string;
};
