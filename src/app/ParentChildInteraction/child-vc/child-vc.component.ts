import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-vc',
  templateUrl: './child-vc.component.html',
  styleUrls: ['./child-vc.component.scss']
})
export class ChildVCComponent implements OnInit {

  private childProp : string
  
  public get ChildProp() : string {
    return this.childProp
  }

  
  public set ChildProp(v : string) {
    this.childProp = v;
  }
  
  propForLocalVar : string = '### This is a Local Variable Child Property ###'
  
  
  constructor() { }

  ngOnInit(): void {
    this.childProp = '** I am a child..'
  }

  findName(name:string) {
    this.childProp = name
  }

}
