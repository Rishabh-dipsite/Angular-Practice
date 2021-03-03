import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  parentProp = 'I am sexy and I know it !!'
  constructor() { }

  ngOnInit(): void {
  }

  opPropHandle(value : string){
    this.parentProp = value
  }

}
