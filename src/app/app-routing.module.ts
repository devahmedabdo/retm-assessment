import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CloudComponent } from './views/cloud/cloud.component';
import { ErrorComponent } from './views/error/error.component';
import { TokenCheckerComponent } from './views/token-checker/token-checker.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cloud', component: CloudComponent },
  { path: 'token/:token', component: TokenCheckerComponent },
  { path: 'token', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
