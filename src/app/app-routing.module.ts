import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormGroupComponent } from './component/form-group/form-group.component';

const routes: Routes = [

  {path: 'cart', component: FormGroupComponent },

  {
    path:'register',component:FormGroupComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
