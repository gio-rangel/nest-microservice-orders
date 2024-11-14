// Utility type to make optional properties required (only those that are defined)
export type RemoveUndefined<T> = {
    [K in keyof T]-?: Exclude<T[K], undefined>;
};
  
export function removeUndefined<T>(obj: T): RemoveUndefined<T> {
    const result = {} as RemoveUndefined<T>;
  
    for (const [key, value] of Object.entries(obj)) {
      if (value !== undefined) {
        // Type assertion to handle TypeScript type mismatch
        (result as any)[key] = value;
      }
    }
  
    return result;
}
  