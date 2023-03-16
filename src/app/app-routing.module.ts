import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CloudComponent } from './views/cloud/cloud.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cloud', component: CloudComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
