import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { ContactCard } from "../../components/ContactCard/ContactCard";
import { CreateContact } from "../../components/CreateContact/CreateContact";
import { SearchContact } from "../../components/SearchContact/SearchContact";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { auth } from "../../redux/reducers/authReducer";
import { getContacts } from "../../redux/reducers/contactsReducer";
import s from "./ContactsBook.module.scss";

export const ContactsBook = () => {
	const [search, setSearch] = useState<string>("")
	const userId = useAppSelector((state) => state.auth.user?.id);
	let contacts = useAppSelector((state) => state.contacts.contacts);
	const isAuth = useAppSelector((state) => state.auth.isAuth);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(auth());
	}, [dispatch]);

	useEffect(() => {
		userId && dispatch(getContacts(userId));
	}, [dispatch, userId]);

	if (!isAuth) {
		return <Navigate to="/login" />}

	if (search !== "") {
		contacts = contacts.filter(el => {
			return el.name.toLowerCase().includes(search) || el.phoneNumber.includes(search)
		})
	}

	return (
			<div className={s.contactBooks}>
				{userId && <CreateContact />}
				<SearchContact search={search} setSearch={setSearch} />
				<div className={s.cards}>
					{contacts.map((el, index) => (
						<ContactCard key={index} contact={el} />
					))}
				</div>
			</div>
		);
};
