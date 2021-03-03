import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvertisementComponent } from './DynamicComponents/advertisement/advertisement.component';
import { ParentComponent } from './ParentChildInteraction/parent/parent.component';


const routes: Routes = [
  {path:'pci', component:ParentComponent}, // Parent Child Interaction
  {path:'dc', component : AdvertisementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
