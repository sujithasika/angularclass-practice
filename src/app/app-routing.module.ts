import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {sampleproducts} from './sampleproducts/sampleproducts.component';
const routes: Routes = [ {path:'product',component:sampleproducts}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
