import React from "react";
import { ContactCard } from "../../components/ContactCard/ContactCard";
import { CreateContact } from "../../components/CreateContact/CreateContact";
import { SearchContact } from "../../components/SearchContact/SearchContact";
import s from "./ContactsBook.module.scss";

const contacts = [
	{ id: "1", name: "Александр", phoneNumber: "89960890043" },
	{ id: "2", name: "Алексей", phoneNumber: "89211100043" },
	{ id: "3", name: "Андрей", phoneNumber: "893260090043" },
];

export const ContactsBook = () => {
	return (
		<div>
			<CreateContact />
			<SearchContact />
			<div className={s.cards}>
				{contacts.map((el) => (
					<ContactCard key={el.id} contact={el} />
				))}
			</div>
		</div>
	);
};
