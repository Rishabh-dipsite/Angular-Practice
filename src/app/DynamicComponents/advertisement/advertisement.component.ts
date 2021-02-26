import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { AdHostDirective } from '../directives/ad-host.directive';
import { DynamicAdComponent } from '../dynamic-ad/dynamic-ad.component';

@Component({
  selector: 'app-advertisements',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.scss']
})
export class AdvertisementComponent implements OnInit {

  @ViewChild(AdHostDirective, {static: true}) adHosted : AdHostDirective

  constructor(private cfr : ComponentFactoryResolver) { 
    console.log('hey babes !! ');
    
  }

  ngOnInit(): void {
    this.load()
    console.log('hey babes !! xoxo');
  }

  load(){
    let componentFactoryResolver =  this.cfr.resolveComponentFactory(DynamicAdComponent)

    let adHostdir = this.adHosted.viewRef
    adHostdir.clear()

    let componentRef = adHostdir.createComponent(componentFactoryResolver)
  }

}
