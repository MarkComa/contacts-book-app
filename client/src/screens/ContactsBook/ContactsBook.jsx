import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { ContactCard } from "../../components/ContactCard/ContactCard";
import { CreateContact } from "../../components/CreateContact/CreateContact";
import { SearchContact } from "../../components/SearchContact/SearchContact";
import { getContacts } from "../../redux/reducers/contactsReducer";
import s from "./ContactsBook.module.scss";

export const ContactsBook = () => {
	const isAuth = useSelector((state) => state.auth.isAuth);
	const userId = useSelector((state) => state.auth.user.id);
	const contacts = useSelector((state) => state.contacts.contacts);
	const dispatch = useDispatch()
	
	useEffect(()=>{
		dispatch(getContacts(userId))
	},[dispatch])

	if (!isAuth) {
		return <Navigate to='/login' />;
	}
	return (
		<div>
			<CreateContact />
			<SearchContact />
			<div className={s.cards}>
				{contacts.map((el, index) => (
					<ContactCard key={index} contact={el} />
				))}
			</div>
		</div>
	);
};
