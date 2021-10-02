import { set } from "local-storage";
import { Action } from "extra-types/utils/functions";
import { IS_DARK_KEY, UIStore } from "UIStore";

export const useIsDarkMode = () => {
	const isDark = UIStore.useState((s) => s.isDarkMode);
	const toggle = () => {
		UIStore.update((s) => {
			set(IS_DARK_KEY, !s.isDarkMode);
			s.isDarkMode = !s.isDarkMode;
		});
	};

	return [isDark, toggle] as [boolean, Action];
};
