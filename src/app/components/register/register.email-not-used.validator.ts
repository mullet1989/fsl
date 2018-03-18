import { Input, Directive } from "@angular/core";
import { NG_ASYNC_VALIDATORS, Validator, AbstractControl, ValidatorFn, ValidationErrors, AsyncValidatorFn, AsyncValidator } from "@angular/forms";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import { UserSearchService } from "../../admin/services/search/user.search.service";


@Directive({
  selector: '[appEmailAlreadyInUse]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: EmailAlreadyInUseValidatorDirective, multi: true }]
})
export class EmailAlreadyInUseValidatorDirective implements AsyncValidator {
  constructor(private _userSearchService: UserSearchService) { }
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return emailAlreadyInUseValidator(this._userSearchService)(control);
  }
}

/** A hero's name can't match the given regular expression */
function emailAlreadyInUseValidator(ss: UserSearchService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors> => {
    let email = control.value;
    return ss.GetByEmail(email).map(
      users => {
        return (users && users.length > 0) ? { "emailAlreadyInUse": true } : null;
      }
    );
  };
}
