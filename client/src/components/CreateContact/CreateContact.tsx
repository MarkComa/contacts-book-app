import React from "react";
import { CreateContactProps } from "./CreateContact.props";
import s from "./CreateContact.module.scss";
import { createContact } from "../../redux/reducers/contactsReducer";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { SubmitHandler, useForm } from "react-hook-form";

export type InputsType = {
	name: string;
	phoneNumber: string;
};

export const CreateContact = ({
	className,
	...props
}: CreateContactProps): JSX.Element => {
	const owner = useAppSelector((state) => state.auth.user?.id);
	const dispatch = useAppDispatch();

	const defaultValues = {
		name: "",
		phoneNumber: "",
	};
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<InputsType>({ defaultValues });
	if (owner) {
		const onSubmit: SubmitHandler<InputsType> = (data): void => {
			dispatch(createContact({ data, owner }));
			reset({ ...defaultValues });
		};

		return (
			<div className={s.createContact} {...props}>
				<form className={s.form} onSubmit={handleSubmit(onSubmit)}>
					<div className={s.block__input}>
						<input
							{...register("name", { required: true })}
							type="text"
							placeholder="Введите Фамилию и Имя"
						/>
						{errors.name && (
							<span className={s.error}>Обязательное поле</span>
						)}
					</div>
					<div className={s.block__input}>
						<input
							{...register("phoneNumber", { required: true })}
							type='tel'
							pattern="8-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
							placeholder="8-ххх-ххх-хх-хх"
						/>
						{errors.phoneNumber && (
							<span className={s.error}>Обязательное поле</span>
						)}
					</div>
					<input
						type="submit"
						value={"Создать контакт"}
						className={s.submit}
					/>
				</form>
			</div>
		);
	}
	return <></>;
};
