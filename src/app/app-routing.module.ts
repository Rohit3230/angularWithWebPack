import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'demo',
    loadChildren:()=> import('./demo/demo-module/demo-module.module').then(m=>m.DemoModuleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
