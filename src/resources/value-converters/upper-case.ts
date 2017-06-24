import { valueConverter } from 'aurelia-framework';

@valueConverter('upper-case')
export class UppercaseValueConverter {

  toView(value: string) {
    return value.toUpperCase();
  }
}
