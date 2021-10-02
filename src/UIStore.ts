import { get } from "local-storage";
import { Store } from "pullstate";

export const IS_DARK_KEY = "IS_DARK";
export const SET_COLORS_INDEX_KEY = "SET_COLORS_INDEX";

export const UIStore = new Store({
	isDarkMode: get<boolean>(IS_DARK_KEY) ?? false,
	setColorsIndex: get<number>(SET_COLORS_INDEX_KEY) ?? 0,
});
