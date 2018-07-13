import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


import { UserService } from '../../services/users.service';
import { User } from '../../model/model.user';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  displayedColumns = ['username', 'email', 'role', 'registrationDate' , 'options'];
  
  users: Array<User>;
  totalCount = 0;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];
  error: string;

  currentPageIndex = 1;
  currentPageSize = 10;

  looding = true;
  
  constructor(
    private userService: UserService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.loodPage(0, 10);
  }
  
  public deleteUser(id: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(dialogresult => {
      if (dialogresult) {
        this.userService.delete(id)
          .subscribe(result => {
            if (result['status'] === 'SUCCESS') {
              this.reLood();
            }
          });
      }
    });
  }
  
  public newUser() {
    this.editUser(new User());
  }

  public editUser(user: User) {
//    const dialogRef = this.dialog.open(SectionEditDialogComponent, {data: section});
//    dialogRef.afterClosed().subscribe(dialogresult => {
//      if (dialogresult) {
//        this.reLood();
//      }
//    });
  }
  
  public changePage(pageEvent: PageEvent) {
    this.loodPage(pageEvent.pageIndex, pageEvent.pageSize);
  }

  private reLood() {
    this.loodPage(this.currentPageIndex, this.currentPageSize);
  }

  private loodPage(pageIndex: number, pageSize: number) {
    this.looding = true;
    this.userService.getUsers(pageIndex, pageSize)
      .subscribe(result => {
        this.looding = false;
        this.users = result["content"];
        this.totalCount = result["totalElements"];
        this.currentPageIndex = pageIndex;
        this.currentPageSize = pageSize;
      });
  }

}
