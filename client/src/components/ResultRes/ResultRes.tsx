import React from "react";
import s from "./ResultRes.module.scss";
import { useAppSelector } from "../../hooks/hooks";

export const ResultRes = (): JSX.Element => {
	const resultRes = useAppSelector((state) => state.auth.resultRes);
	console.log(resultRes);
	return <div>{resultRes.message}</div>;
};
