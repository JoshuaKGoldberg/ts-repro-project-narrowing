import { watA } from "../a/Wat";

export const watB = (value: string | Error | undefined) => {
  watA(value);

  if (value === undefined || value instanceof Error) {
    let printed: Error | undefined = value;
    return printed;
  }

  // watA(value);
  return value;
};
