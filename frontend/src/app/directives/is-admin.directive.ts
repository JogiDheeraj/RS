import {select, NgRedux} from '@angular-redux/store';
import {Directive, ElementRef, OnInit, Renderer, OnDestroy, Attribute} from '@angular/core';
import {Observable} from 'rxjs/observable';

import {User, Role} from '../model/model.user';
import {IAppState} from '../model/redux.store';


@Directive({
  selector: "[showforRoles]"
})
export class ForRolesDirective implements OnInit, OnDestroy {
  
  sub;
  
  constructor(
    @Attribute('showforRoles') public showforRoles: string,
    private el: ElementRef,
    private renderer: Renderer,
    private ngRedux: NgRedux<IAppState>
  ) { }

  ngOnInit(): void {
    const roles = this.showforRoles.split(',');
    
    this.sub = this.ngRedux.subscribe(() => { 
      const user = this.ngRedux.getState().user;
      if(roles.includes(user.role)) {
        this.renderer.setElementStyle(
            this.el.nativeElement, 
            'display', 'block'
        );
      }else{
        this.renderer.setElementStyle(
            this.el.nativeElement, 
            'display', 'none'
        );
      }
    });
  }
  
  ngOnDestroy(): void {
    //this.sub.unsubscribe();
  }

}