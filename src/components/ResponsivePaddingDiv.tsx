import { useIsBreakpoint } from "hooks/useIsBreakpoint";
import React, { PropsWithChildren } from "react";

export const ResponsivePaddingDiv = ({
	children,
	className = "",
}: PropsWithChildren<{ className?: string }>) => {
	const isSm = useIsBreakpoint("sm");
	const isMd = useIsBreakpoint("md");
	return (
		<div
			className={className + " " + (isMd ? "p-12" : isSm ? "p-6" : "p-2")}
		>
			{children}
		</div>
	);
};
