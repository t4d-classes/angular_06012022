import { AbstractControl, FormControl } from "@angular/forms";


export type Color = {
  id: number,
  name: string,
  hexcode: string,
};

export type NewColor = Omit<Color, "id">;

export type ColorForm = {
  name: FormControl<string>,
  hexcode: FormControl<string>,
};
