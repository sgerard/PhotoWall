import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CollectionsComponent} from './collections/collections.component';
import {MainComponent} from './main/main.component';
import {CollectionDetailComponent} from './collection-detail/collection-detail.component';

const routes: Routes = [
  {path: 'home', component: MainComponent},
  {path: 'collections', component: CollectionsComponent},
  {path: 'collection/:id', component: CollectionDetailComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
