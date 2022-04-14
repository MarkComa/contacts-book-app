import React, { useState } from "react";
import { CreateContactProps } from "./CreateContact.props";
import s from "./CreateContact.module.scss";

export const CreateContact = ({
	className,
	...props
}: CreateContactProps): JSX.Element => {
	const [fio, setFio] = useState<string>("");
	const [nubmerPhone, setNubmerPhone] = useState<string>("");
	return (
		<form className={s.createContact}>
			<span>Введите Фамилию и Имя</span>
			<input
				type="text"
				onChange={(e) => setFio(e.target.value)}
				value={fio}
			/>
			<span>Введите номер телефона</span>
			<input
				type="text"
				onChange={(e) => setNubmerPhone(e.target.value)}
				value={nubmerPhone}
			/>
			<input type="submit" value="Создать" />
		</form>
	);
};
