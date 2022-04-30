import React from "react";
import s from "./ResultRes.module.scss";
import { resultResType } from "../../types/type";

export const ResultRes = (resultRes: resultResType): JSX.Element => {
	return <div className={s.resultRes}>{resultRes.message}</div>;
};
