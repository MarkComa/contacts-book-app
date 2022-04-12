import React from "react";
import { ContactCardProps } from "./ContactCard.props";
import s from "./ContactCard.module.scss";

export const ContactCard = ({ contact }: ContactCardProps): JSX.Element => {
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
			<button className={s.btn}>Удалить</button>
		</div>
	);
};
