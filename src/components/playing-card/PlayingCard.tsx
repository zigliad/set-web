import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Card from "bl/card/Card";
import React from "react";
import cardsSvgs from "utils/svgsLoader";

const colors = [["#52D95D", "#FF0188", "#A2A0DF"]];

export const PlayingCard = ({
	card,
	picked = false,
}: {
	card: Card;
	picked?: boolean;
}) => {
	let cardString = card.attributes
		.map((attr) => `${attr + 1}`)
		.reduce((a1, a2) => a1 + a2, "");

	const color = colors[0][+cardString.charAt(cardString.length - 1) - 1];
	cardString = cardString.slice(0, -1); // For the image, ignore the color attribute

	const CardImage = cardsSvgs[cardString];

	return (
		<Paper
			// elevation={8}
			className={
				"flex-center full  transform " + (!!picked ? " scale-90" : " ")
			}
		>
			{/* {picked && <span>PICKED</span>} */}
			{/* <Typography className={picked ? "text-red-500" : "text-blue-500"}>
				LIAD LIad
			</Typography> */}
			<CardImage fill={color} stroke={color} />
		</Paper>
	);
};
