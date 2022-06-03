import { AbstractControl, ValidationErrors } from "@angular/forms";

export type HexcodeValidator = (c: AbstractControl<string | null>) =>
  ValidationErrors | null;

export const hexcodeValidator: HexcodeValidator = (c) => {

  const reHexcode = new RegExp('^[a-fA-F0-9]{6}$');

  const hexcodeValue = c.value ?? '';

  if (!hexcodeValue) {
    // there is no value in the field, do not 
    // validate
    return null;
  }

  if (!reHexcode.exec(c.value ?? '')) {
    return {
      hexcode: true 
    };
  }

  // no error, then return null
  return null;

};
