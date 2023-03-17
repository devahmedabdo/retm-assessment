import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CloudComponent } from './views/cloud/cloud.component';
import { TokenCheckerComponent } from './views/token-checker/token-checker.component';
import { ErrorComponent } from './views/error/error.component';
import { SccessTokenComponent } from './views/sccess-token/sccess-token.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cloud', component: CloudComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'success', component: SccessTokenComponent },
  { path: 'check/:token', component: TokenCheckerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
