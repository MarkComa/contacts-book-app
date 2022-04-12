import React from "react";
import { CreateContactProps } from "./CreateContact.props";
import s from "./CreateContact.module.scss";

export const CreateContact = ({
	className,
	...props
}: CreateContactProps): JSX.Element => {
	return (
		<form className={s.createContact}>
			<span>Введите Фамилию и Имя</span>
			<input type="text" />
			<span>Введите номер телефона</span>
			<input type="text" />
			<input type="submit" value="Создать" />
		</form>
	);
};
