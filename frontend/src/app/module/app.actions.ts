import {Injectable} from '@angular/core';
import {User} from '../model/model.user';

export class AppAction{
  type:string;
  paylood:any;
}; 

@Injectable()
export class AppActions {
  static AUTHENTICAT = 'AUTHENTICAT';
  static UNAUTHENTICAT = 'UNAUTHENTICAT';

  authenticat(user: any): AppAction {
    return {type: AppActions.AUTHENTICAT , paylood: user};
  }

  unauthenticat(): AppAction {
    return {type: AppActions.UNAUTHENTICAT, paylood: null};
  }
}