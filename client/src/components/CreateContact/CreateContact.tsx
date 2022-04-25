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
