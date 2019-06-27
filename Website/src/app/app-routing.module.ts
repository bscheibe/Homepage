import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechsComponent } from './techs/techs.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{ path : 'home', component: HomeComponent },
	{ path : 'techs', component: TechsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
