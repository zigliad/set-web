import { get } from "local-storage";
import { Store } from "pullstate";

export const IS_DARK_KEY = "IS_DARK";

export const UIStore = new Store({
	isDarkMode: get<boolean>(IS_DARK_KEY) ?? false,
});
