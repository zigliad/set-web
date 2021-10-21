import { Paper } from "@material-ui/core";
import React, { DispatchWithoutAction } from "react";
import { useWindowSize } from "react-use";

import Card from "bl/card/Card";
import { useIsBreakpoint } from "hooks/useIsBreakpoint";
import { useSetColors } from "hooks/useSetsColors";
import cardsSvgs from "utils/svgsLoader";

export const PlayingCard = ({
	card,
	picked = false,
	onClick,
}: {
	card: Card;
	picked?: boolean;
	onClick: DispatchWithoutAction;
}) => {
	const { colors } = useSetColors();
	let cardString = card.attributes
		.map((attr) => `${attr + 1}`)
		.reduce((a1, a2) => a1 + a2, "");

	const color = colors[+cardString.charAt(cardString.length - 1) - 1];
	cardString = cardString.slice(0, -1); // For the image, ignore the color attribute

	const CardImage = cardsSvgs[cardString];

	const isMd = useIsBreakpoint("md");
	const { height } = useWindowSize();

	return (
		<Paper
			onClick={onClick}
			className={
				"flex-center full shadow-lg rounded-2xl transform transition " +
				(picked ? " scale-90 rotate-6" : " ")
			}
		>
			<span className={isMd ? "transform rotate-90" : ""}>
				<CardImage
					fill={color}
					stroke={color}
					style={{
						width: height / 4.6,
						height: height / 4.6,
					}}
				/>
			</span>
		</Paper>
	);
};
