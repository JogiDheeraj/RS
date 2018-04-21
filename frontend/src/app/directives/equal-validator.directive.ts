import {Directive, forwardRef, Attribute} from '@angular/core';
import {Validator, AbstractControl, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[appEqualValidator][formControlName],[appEqualValidator][formControl],[appEqualValidator][ngModel]',
  providers:[
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidatorDirective), multi: true }
    ]
})

export class EqualValidatorDirective implements Validator {
  constructor( 
    @Attribute('appEqualValidator') public appEqualValidator: string,
    @Attribute('reverse') public reverse: string) {
  }

  private get isReverse() {
    if (!this.reverse) {return false;}
    return this.reverse === 'true' ? true : false;
  }

  validate(c: AbstractControl): {[key: string]: any} {
    // self value
    const v = c.value;

    // control value
    const e = c.root.get(this.appEqualValidator);

    // value not equal
    if (e && v !== e.value && !this.isReverse) {
      return {
        appEqualValidator: false
      }
    }

    // value equal and reverse
    if (e && v === e.value && this.isReverse) {
      console.log(e);
      delete e.errors['appEqualValidator'];
      if (!Object.keys(e.errors).length) {e.setErrors(null);}
    }

    // value not equal and reverse
    if (e && v !== e.value && this.isReverse) {
      e.setErrors({appEqualValidator: false});
    }

    return null;
  }
}