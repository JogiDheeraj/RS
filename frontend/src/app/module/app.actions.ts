import {Injectable} from '@angular/core';

import {User} from '../model/model.user';
import {Section} from '../model/model.section';

export class AppAction{
  type:string;
  paylood:any;
}; 

@Injectable()
export class AppActions {
  static AUTHENTICAT = 'AUTHENTICAT';
  static UNAUTHENTICAT = 'UNAUTHENTICAT';
  static SETINDEXSECTIONS = 'SETINDEXSECTIONS';

  authenticat(user: any): AppAction {
    return {type: AppActions.AUTHENTICAT , paylood: user};
  }

  unauthenticat(): AppAction {
    return {type: AppActions.UNAUTHENTICAT, paylood: null};
  }
  
//  setIndexSections(sections:Array<Section>): AppAction {
//    return {type: AppActions.SETINDEXSECTIONS, };
//  }
}