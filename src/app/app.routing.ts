import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
// import { MapComponent } from './components/map/map.component';

const routes: Routes = [
	// { path: '', redirectTo: 'map', pathMatch: 'full' },
  	{ path: '', component: AppComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}