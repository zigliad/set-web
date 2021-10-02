import { Paper } from "@material-ui/core";
import Card from "bl/card/Card";
import { useSetColors } from "hooks/useSetsColors";
import { useIsBreakpoint } from "hooks/useIsBreakpoint";
import React from "react";
import cardsSvgs from "utils/svgsLoader";

export const PlayingCard = ({
	card,
	picked = false,
}: {
	card: Card;
	picked?: boolean;
}) => {
	const { colors } = useSetColors();
	let cardString = card.attributes
		.map((attr) => `${attr + 1}`)
		.reduce((a1, a2) => a1 + a2, "");

	const color = colors[+cardString.charAt(cardString.length - 1) - 1];
	cardString = cardString.slice(0, -1); // For the image, ignore the color attribute

	const CardImage = cardsSvgs[cardString];

	const isMd = useIsBreakpoint("md");

	return (
		<Paper
			className={
				"flex-center full shadow-lg rounded-2xl transform transition " +
				(picked ? " scale-90 rotate-6" : " ")
			}
		>
			<span className={isMd ? "transform rotate-90" : ""}>
				<CardImage fill={color} stroke={color} />
			</span>
		</Paper>
	);
};
