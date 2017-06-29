import { valueConverter } from 'aurelia-framework';

@valueConverter('upperCase')
export class UppercaseValueConverter {

  toView(value: string) {
    return value.toUpperCase();
  }
}
