export const watA = (value: string | Error | undefined) => {
  if (value === undefined || value instanceof Error) {
    let printed: Error | undefined = value;
    return printed;
  }

  return value;
};
