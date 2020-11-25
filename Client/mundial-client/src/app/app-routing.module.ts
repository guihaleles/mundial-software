import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FileComponent } from './pages/file/file.component';
import { SalesListComponent } from './pages/sales-list/sales-list.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'file', component: FileComponent},
  {path: 'sales', component: SalesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
