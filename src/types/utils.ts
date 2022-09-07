export type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any ? A : never;
export type DropFirst<T extends unknown[]> = T extends [any, ...infer U] ? U : never;
export type ActionReturnType<F> = F extends (...args: any[]) => any ? ActionReturnType<ReturnType<F>> : F;
