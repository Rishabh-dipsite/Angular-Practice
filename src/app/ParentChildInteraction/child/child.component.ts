import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

@Input('inputProp') ip : string
@Output('outputProp') op = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  sendToParent(value : string){
    console.log(value)
    this.op.emit(value)
  }
}
