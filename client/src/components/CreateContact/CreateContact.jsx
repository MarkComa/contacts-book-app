import React, { useState } from "react";
// import { CreateContactProps } from "./CreateContact.props";
import s from "./CreateContact.module.scss";
import {createContact} from "../../redux/reducers/contactsReducer"
import { useDispatch, useSelector } from "react-redux";
export const CreateContact = ({
	className,
	...props
}/*: CreateContactProps*/)/*: JSX.Element*/ => {
	const [name, setName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const userId = useSelector((state) => state.auth.user.id);
	const dispatch = useDispatch()
	return (
		<div className={s.createContact} {...props}>
			<span>Введите Фамилию и Имя</span>
			<input
				type="text"
				onChange={(e) => setName(e.target.value)}
				value={name}
			/>
			<span>Введите номер телефона</span>
			<input
				type="text"
				onChange={(e) => setPhoneNumber(e.target.value)}
				value={phoneNumber}
			/>
			<button onClick={() => dispatch(createContact({name, phoneNumber, userId}))}>
				Создать
			</button>
		</div>
	);
};
