import { Paper, PaperProps } from "@material-ui/core";
import React, { PropsWithChildren } from "react";

export const ElevatedPaper = ({
	children,
	className,
	clickable = false,
	...props
}: { clickable?: boolean } & PropsWithChildren<PaperProps>) => {
	return (
		<Paper
			{...props}
			className={
				"rounded-xl shadow-lg p-6 " +
				(clickable ? "cursor-pointer " : "") +
				(className ?? " ")
			}
		>
			{children}
		</Paper>
	);
};
