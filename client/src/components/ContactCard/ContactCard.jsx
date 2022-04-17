import React from "react";
import { ContactCardProps } from "./ContactCard.props";
import s from "./ContactCard.module.scss";
import { removeContact } from "../../redux/reducers/contactsReducer";
import { useDispatch } from "react-redux";

export const ContactCard = ({ contact }/*: ContactCardProps*/)/*: JSX.Element*/ => {
	const dispatch = useDispatch()
	return (
		<div className={s.contactCard}>
			<div>
				<div className={s.name}>{contact.name}</div>
				<a
					href={`tel:${contact.phoneNumber}`}
					className={s.phoneNumber}
				>
					{contact.phoneNumber}
				</a>
			</div>
			<button className={s.btn} onClick={()=>{dispatch(removeContact(contact._id))}}>Удалить</button>
		</div>
	);
};
