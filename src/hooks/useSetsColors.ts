import { set } from "local-storage";

import { SET_COLORS_INDEX_KEY, UIStore } from "UIStore";

export const colors = [
	["#52D95D", "#FF0188", "#A2A0DF"],
	["#EF476F", "#FFD166", "#06D6A0"],
	["#FF9300", "#3DACF7", "#77C344"],
	["#FF006E", "#8338EC", "#FFBE0B"],
];

export const useSetColors = () => {
	const setColorsIndex = UIStore.useState((s) => s.setColorsIndex);
	const change = (index: number) => {
		UIStore.update((s) => {
			set(SET_COLORS_INDEX_KEY, index);
			s.setColorsIndex = index;
		});
	};

	const next = () => change((setColorsIndex + 1) % colors.length);

	return { colors: colors[setColorsIndex], next, change };
};
