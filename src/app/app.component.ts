import { UsersService } from './api/users.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  private usersSubsribtion: Subscription;
  usersList: User[];

  constructor(private usersService: UsersService){

  }
  ngOnInit() {
    this.usersSubsribtion = this.usersService.getUsers().subscribe((data: User[]) => this.usersList = data);
  }

  ngOnDestroy() {
    this.usersSubsribtion.unsubscribe();
  }
}