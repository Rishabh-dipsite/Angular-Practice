import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildVCComponent } from '../child-vc/child-vc.component';

@Component({
  selector: 'app-parent-vc',
  templateUrl: './parent-vc.component.html',
  styleUrls: ['./parent-vc.component.scss']
})
export class ParentVCComponent implements OnInit {

  parentProp : string = 'This is parent prop :'
  @ViewChild(ChildVCComponent) childVC : ChildVCComponent
  constructor() { }

  ngOnInit(): void {
  }

  ontap(param : string){
    this.childVC.findName(param)
    this.parentProp += ' ' +  this.childVC.ChildProp
  }

}
