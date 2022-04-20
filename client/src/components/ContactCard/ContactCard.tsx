import React from "react";
import { ContactCardProps } from "./ContactCard.props";
import s from "./ContactCard.module.scss";
import { removeContact } from "../../redux/reducers/contactsReducer";
import { useAppDispatch } from "../../hooks/hooks";
import CloseIcon from "./close.svg";

export const ContactCard = ({ contact }: ContactCardProps): JSX.Element => {
	const dispatch = useAppDispatch();
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
			<button
				className={s.btn}
				onClick={() => {
					dispatch(removeContact(contact._id));
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 48 48"
					width="24px"
					height="24px"
				>
					<path
						fill="none"
						d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
					/>
					<path
						fill="#f44336"
						d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"
					/>
					<path
						fill="#f44336"
						d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"
					/>
				</svg>
			</button>
		</div>
	);
};
