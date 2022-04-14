import React from "react";
import s from "./Input.module.css";
import cn from "classnames";

import { InputProps } from "./Input.props";
export const Input = ({
	value,
	setValue,
	placeholder,
	className,
	...props
}: InputProps): JSX.Element => {
	return (
		<input
			className={cn(s.input, className)}
			type={"text"}
			value={value}
			onChange={(e) => setValue(e.target.value)}
			placeholder={placeholder}
			{...props}
		/>
	);
};
