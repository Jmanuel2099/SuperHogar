import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NosotrosComponent } from './public/nosotros/nosotros.component';
import { ContactanosComponent } from './public/contactanos/contactanos.component';


const routes: Routes = [
  {
    path: 'nosotros',
    component:NosotrosComponent
  },
  {
    path: 'contactanos',
    component: ContactanosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
