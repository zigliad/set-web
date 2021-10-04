import { useIsBreakpoint } from "hooks/useIsBreakpoint";
import React, { PropsWithChildren } from "react";

export const ResponsivePaddingDiv = ({
	children,
	className = "",
}: PropsWithChildren<{ className?: string }>) => {
	const isLg = useIsBreakpoint("lg");
	const isMd = useIsBreakpoint("md");
	const isSm = useIsBreakpoint("sm");
	return (
		<div
			className={
				className +
				" " +
				(isLg ? "p-12" : isMd ? "p-9" : isSm ? "p-6" : "p-2")
			}
		>
			{children}
		</div>
	);
};
