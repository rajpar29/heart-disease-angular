import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PredictorComponent } from './predictor/predictor.component';


const routes: Routes = [
{
  path: "",
  redirectTo: "predict",
  pathMatch: "full"
},
{
  path:"predict",
  component:PredictorComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
