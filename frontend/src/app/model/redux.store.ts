import {AppActions, AppAction} from '../module/app.actions';
import {User} from './model.user';

export interface IAppState {
  isAuthentecated: boolean;
  user: User
}

export const INITIAL_STATE: IAppState = {
  isAuthentecated: false,
  user: null
}

export function rootReducer(state: IAppState, action: AppAction): IAppState {
  switch (action.type) {
    case AppActions.AUTHENTICAT:
      const newstate = Object.assign({}, state, {isAuthentecated: true, user: action.paylood})
      console.log(newstate);
      return newstate;
    case AppActions.UNAUTHENTICAT:
      return Object.assign({}, state, {isAuthentecated: false, user: null});
  }
  return state;
}


