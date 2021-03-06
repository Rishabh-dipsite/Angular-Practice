import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdvertisementComponent } from './DynamicComponents/advertisement/advertisement.component';
import { AdHostDirective } from './DynamicComponents/directives/ad-host.directive';
import { DynamicAdComponent } from './DynamicComponents/dynamic-ad/dynamic-ad.component';
import { ParentComponent } from './ParentChildInteraction/parent/parent.component';
import { ChildComponent } from './ParentChildInteraction/child/child.component';
import { ParentVCComponent } from './ParentChildInteraction/parent-vc/parent-vc.component';
import { ChildVCComponent } from './ParentChildInteraction/child-vc/child-vc.component';

@NgModule({
  declarations: [
    AppComponent,
    AdvertisementComponent,
    AdHostDirective,
    DynamicAdComponent,
    ParentComponent,
    ChildComponent,
    ParentVCComponent,
    ChildVCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
