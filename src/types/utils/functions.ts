export type Action = () => void;
export type Action1<T> = (a: T) => void;
export type Action2<T, U> = (a: T, b: U) => void;

export type Function<T, U> = (a: T) => U;
export type Function1<T, U, V> = (a: T, b: U) => V;

export type Supplier<T> = () => T;
