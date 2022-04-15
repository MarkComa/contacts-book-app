import React, { useState } from "react";
import { CreateContactProps } from "./CreateContact.props";
import s from "./CreateContact.module.scss";
import { createContact } from "../../api/api";

export const CreateContact = ({
	className,
	...props
}: CreateContactProps): JSX.Element => {
	const [name, setName] = useState<string>("");
	const [numberPhone, setNubmerPhone] = useState<string>("");
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
				onChange={(e) => setNubmerPhone(e.target.value)}
				value={numberPhone}
			/>
			<button onClick={() => createContact(name, numberPhone)}>
				Создать
			</button>
		</div>
	);
};
