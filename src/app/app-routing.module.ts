import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryDetailComponent } from './home/pages/country-detail/country-detail.component';
import { CountryListComponent } from './home/pages/country-list/country-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CountryListComponent
  },
  {
    path: 'detail/:id',
    component: CountryDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
