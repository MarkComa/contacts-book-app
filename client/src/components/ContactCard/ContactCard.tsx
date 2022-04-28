import React, { memo, useState } from "react";
import { ContactCardProps } from "./ContactCard.props";
import s from "./ContactCard.module.scss";
import {
	editContact,
	getContacts,
	removeContact,
} from "../../redux/reducers/contactsReducer";
import { useAppDispatch } from "../../hooks/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { contactType } from "../../types/type";

export const ContactCard: React.FC<ContactCardProps> = memo(
	({ contact }): JSX.Element => {
		const dispatch = useAppDispatch();
		const [editMode, setEditMode] = useState<boolean>(false);
		const { register, handleSubmit } = useForm<contactType>();
		const id = contact?._id;
		const owner = contact?.owner;

		const onSubmit: SubmitHandler<contactType> = (data) => {
			dispatch(editContact({ id, data, owner }));
			setEditMode(false);
		};
		return (
			<div className={s.contactCard}>
				{!editMode && (
					<>
						<div>
							<div className={s.name}>{contact?.name}</div>
							<a
								href={`tel:${contact?.phoneNumber}`}
								className={s.phoneNumber}
							>
								{contact?.phoneNumber}
							</a>
						</div>
						<button
							className={s.edit}
							onClick={() => setEditMode(true)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24px"
								height="24px"
								viewBox="0 0 64 64"
								fill="1d1d1b"
							>
								<path d="M57.85,19.57c.78-1.06,1.1-2.22.66-2.93a52.27,52.27,0,0,0-7.59-6.32,3.87,3.87,0,0,0-3.91.41C46.23,11.45,40.6,20,40.6,20a14.58,14.58,0,0,1-1.09-3.66,86.5,86.5,0,0,0-2-8.43c-.31-.44-1.91-.32-3.13,0s-9,1.93-15.06,3.43S6.07,14.73,5.92,14.85s-.63,4.94-.63,5.1c0,.47,4,13.25,6.13,19.75s4.78,15,5.62,16.12,3.06.41,9.59-1.56,14.63-4.12,18-5.37,2.88-2.91,2.66-4-2-7.13-2-7.13a11.69,11.69,0,0,1,1.78-3C48.57,32.6,57.07,20.64,57.85,19.57ZM44.26,18.26c4-5.37,4.69-6.34,5.19-6.19a33,33,0,0,1,3.43,2.28c.85.6,1.1,1,1,1.1S43.45,28.32,42.26,30s-1.81,2.84-2,2.87-.91-.75-1.16-.87-.9-.38-.81-.53,9.78-13,11.41-15,1.9-2.1,1.78-2.32-.72-.84-1-.62S40.32,26.6,39.26,28.23a10.94,10.94,0,0,1-2.41,2.87c-.18,0-2.9-.18-2.62-.4C34.23,30.7,40.29,23.64,44.26,18.26ZM42.42,38.64c-.1.15-3.44,1.87-3.63,1.62A3,3,0,0,0,37.51,39c-.88-.44-2.78-1.31-3.19-1.44s-1,0-1-.06-.06-4.94,0-5.19c.18-.46,3.63-.72,5.94,1.47A10.34,10.34,0,0,1,42.42,38.64ZM26.6,49.76c-2.09.59-6.65,2.28-7,1.91s-3.46-9.41-5.46-16.35S8.92,16.7,9,16.35s10.65-2.9,14.65-4,12-2.81,12.1-2.71S39.13,21.92,39.07,22s-6.15,7.78-6.75,8.41a1.06,1.06,0,0,0-.06,1.34s.31.19.16,1.81-.85,8.72-.32,9.47.88.94,2.1.47,9-4.12,9.15-4a62.21,62.21,0,0,1,1.88,6.41C45.2,46.07,28.7,49.17,26.6,49.76ZM45.2,34a6.45,6.45,0,0,0-.75-2.6c-.28-.12-.66.5-.66.79s.75,2.25.69,2.59a2.67,2.67,0,0,1-.25.69,25.67,25.67,0,0,0-.94-2.94c-.12,0-.69.47-.66.87s1,2.85,1,2.85-.28.72-.4.44a12.77,12.77,0,0,0-2-3C41,33.5,49,23,51.57,19.85s3.1-3.56,3.28-3.59,1.66,1.22,1.47,1.78-9.25,13.44-10.09,14.5S45.2,34.48,45.2,34ZM31.26,15.89c.25-.13.22-.79-.09-1s-2.75.53-9.47,2.15S13.47,19.85,13.45,20c-.1.44.22.94.53.94A78,78,0,0,1,21.76,18C25.82,17,31,16,31.26,15.89Zm2.94,5.93c.4-.12.06-1-.16-1.12a57.49,57.49,0,0,0-8,2.09c-4,1.25-10,3.06-10.09,3.41s-.07.87.37.94,2.88-1,7.81-2.57S33.79,22,34.2,21.82ZM29,31.17a17.18,17.18,0,0,0-3.81.31c-1.88.22-7.39,1.06-7.63,1.53s0,1,.44,1,.75-.06,4.09-1a44.5,44.5,0,0,1,7-1.34C29.51,31.7,29.38,31.32,29,31.17Zm-.81,6.22c.65-.16.4-.35.43-.5s-.78-.29-3.75.37S20,38.7,19.6,39.17a.59.59,0,0,0,.19.87c.25.06.31-.09,3.06-1.25A21,21,0,0,1,28.17,37.39Zm-3,5.68a15.45,15.45,0,0,0-4,1.41.7.7,0,0,0,.18.81,14.59,14.59,0,0,0,2.94-.84c1.22-.44,5.19-1.6,5-1.72A12.5,12.5,0,0,0,25.2,43.07Z" />
							</svg>
						</button>
						<button
							className={s.btn}
							onClick={() => {
								dispatch(removeContact(contact?._id));
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
					</>
				)}
				{editMode && (
					<form onSubmit={handleSubmit(onSubmit)}>
						<input
							className={s.edit__name}
							{...register("name", { required: true })}
							type="text"
							placeholder="Введите имя"
							defaultValue={contact.name}
						/>
						<input
							className={s.edit__phoneNumber}
							{...register("phoneNumber", { required: true })}
							type="tel"
							pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
							title="+79261234567, 
							89261234567, 
							79261234567, 
							+7 926 123 45 67, 
							8(926)123-45-67, 
							123-45-67, 
							9261234567, 
							79261234567, 
							(495)1234567, 
							(495) 123 45 67, 
							89261234567, 
							8-926-123-45-67, 
							8 927 1234 234, 
							8 927 12 12 888, 
							8 927 12 555 12, 
							8 927 123 8 123"
							placeholder="Введите номер телефона"
							defaultValue={contact.phoneNumber}
						/>
						<input className={s.edit__save} type="submit" value="Сохранить" />
						<button
							className={s.edit__close}
							onClick={() => {
								setEditMode(false);
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
					</form>
				)}
			</div>
		);
	},
);
