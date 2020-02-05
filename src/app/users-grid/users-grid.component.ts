import { Component, Input, ViewChild, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-users-grid',
  templateUrl: './users-grid.component.html',
  styleUrls: ['./users-grid.component.css']
})
export class UsersGridComponent implements OnInit{

  usersFilter = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    gender: new FormControl(''),
    ipAddress: new FormControl(''),
  });
  

  @Input()users: User[];

  filteredUsers: User[];

  ngOnInit() {
    this.filteredUsers = this.users;
    console.log('this.filteredUsers: ', this.filteredUsers)
    this.onFilterChanges();
  }

  onFilterChanges(): void {
    this.usersFilter.valueChanges
      .pipe(debounceTime(500)).subscribe(val => {
        this.filteredUsers = this.users
        .filter(user => {
          return user.first_name.includes(val.firstName) && user.last_name.includes(val.lastName)
          && user.email.includes(val.email) && user.gender.includes(val.gender)
          && user.ip_address.includes(val.ipAddress);
        })
        }
      );
  }
}




