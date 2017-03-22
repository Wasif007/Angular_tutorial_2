import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-user-list',
  templateUrl: './new-user-list.component.html',
  styleUrls: ['./new-user-list.component.css']
})
export class NewUserListComponent implements OnInit {
names:string[];
  constructor() {
    this.names=['wasif','asif'];
   }

  ngOnInit() {
  }

}
