import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReadstoriesComponent } from './user/readstories/readstories.component';
import { PoststoryComponent } from './user/poststory/poststory.component';
import { ApprovestoryComponent } from './admin/approvestory/approvestory.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AccessdeniedComponent } from './accessdenied/accessdenied.component';
import { GoogleComponent } from './google/google.component';
import { HISCustomerUIComponent } from './hiscustomer-ui/hiscustomer-ui.component';
import { HISProductUIComponent } from './hisproduct-ui/hisproduct-ui.component';

const routes: Routes = [
  { path: 'google', component: GoogleComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'readstories', component: ReadstoriesComponent,
    canActivate:[AuthGuardService]
  },
  {
    path: 'poststory', component: PoststoryComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'customer', component: HISCustomerUIComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'product', component: HISProductUIComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'approvestory', component: ApprovestoryComponent,
    canActivate: [AuthGuardService],
    data: { hasRole: 'Admin' }
  },
  { path: 'register', component: RegisterComponent },
  { path: 'accessdenied', component: AccessdeniedComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
