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
import { ExpPowerPipe } from './Pipes/exp-power.pipe';
import { NgFormsComponent } from './forms/TemplateDrivenFormTDF/ng-forms.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    AdvertisementComponent,
    AdHostDirective,
    DynamicAdComponent,
    ParentComponent,
    ChildComponent,
    ParentVCComponent,
    ChildVCComponent,
    ExpPowerPipe,
    NgFormsComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
