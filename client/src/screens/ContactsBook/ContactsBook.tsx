import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { ContactCard } from "../../components/ContactCard/ContactCard";
import { CreateContact } from "../../components/CreateContact/CreateContact";
import { SearchContact } from "../../components/SearchContact/SearchContact";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getContacts } from "../../redux/reducers/contactsReducer";
import s from "./ContactsBook.module.scss";

export const ContactsBook = () => {
	const isAuth = useAppSelector((state) => state.auth.isAuth);
	const userId = useAppSelector((state) => state.auth.user?.id);
	const contacts = useAppSelector((state) => state.contacts.contacts);
	const dispatch = useAppDispatch();

	useEffect(() => {
		userId && dispatch(getContacts(userId));
	}, [dispatch]);

	if (!isAuth) {
		return <Navigate to="/login" />;
	}
	return (
		<div>
			{userId && <CreateContact />}
			<SearchContact />
			<div className={s.cards}>
				{contacts.map((el, index) => (
					<ContactCard key={index} contact={el} />
				))}
			</div>
		</div>
	);
};
