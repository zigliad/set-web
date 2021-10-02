export type Nullable<T> = T | null;
export type Indefinable<T> = T | undefined;
export type Rename<T, K extends keyof T, N extends string> = Pick<
	T,
	Exclude<keyof T, K>
> & { [P in N]: T[K] };

export type IconType = JSX.Element;

export type PropsOf<TComponentOrTProps> =
	TComponentOrTProps extends React.ComponentType<infer TProps>
		? TProps
		: TComponentOrTProps;

export type ArgumentTypes<F extends Function> = F extends (
	...args: infer A
) => any
	? A
	: never;
