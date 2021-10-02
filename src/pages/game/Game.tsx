import { ResponsivePaddingDiv } from "components/ResponsivePaddingDiv";
import { ModeContext } from "modes/context/context";
import { Modes, modes } from "modes/modes";
import { GameBar } from "pages/game/game-bar/GameBar";
import { GameGrid } from "pages/game/game-grid/GameGrid";
import React from "react";
import { useParams } from "react-router";
import { useMount } from "react-use";

export const Game = () => {
	const { mode } = useParams<{ mode: Modes }>();
	const useMode = modes[mode];

	const modeData = useMode();
	useMount(modeData.newGame);

	return (
		<ResponsivePaddingDiv className="full space-y-4">
			<ModeContext.Provider value={modeData}>
				<GameBar />
				<GameGrid />
			</ModeContext.Provider>
		</ResponsivePaddingDiv>
	);
};
