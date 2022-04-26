import React from "react";
import { PreloaderProps } from "./Preloader.props";
import preloader from "./preloader.svg";
import s from "./Preloader.module.scss";
import cn from "classnames";

export const Preloader = React.memo(
	({ className, ...props }: PreloaderProps): JSX.Element => {
		return (
			<div className={cn(s.preloader, className)} {...props}>
				<img src={preloader} alt="Загрузка" />
			</div>
		);
	},
);
