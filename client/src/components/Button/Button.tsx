import React from "react";
import { ButtonProps } from "./Button.props";
import s from "./Button.module.css";
import cn from "classnames";

export const Button = ({ onClick, children, className }: ButtonProps) => {
	return (
		<button onClick={onClick} className={cn(className, s.btn)}>
			{children}
		</button>
	);
};
