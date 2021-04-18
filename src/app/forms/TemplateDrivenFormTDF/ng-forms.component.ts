import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-forms',
  templateUrl: './ng-forms.component.html',
  styleUrls: ['./ng-forms.component.scss']
})
export class NgFormsComponent implements OnInit {

  constructor() { }
  user
  ngOnInit(): void {
    this.user = new User('ARA', 9876543210);
  }

}

class User{
  constructor(
    public name : string,
    public phNo : number
  ){
    
  }
}
