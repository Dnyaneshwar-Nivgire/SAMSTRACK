import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AllUserComponent } from './components/all-user/all-user.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AllSubjectComponent } from './components/all-subject/all-subject.component';
import { ViewSubjectComponent } from './components/view-subject/view-subject.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { AllStudentComponent } from './components/all-student/all-student.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard]
  },
  {
    path: 'add-user',
    component: AddUserComponent,canActivate:[authGuard]
  },

  {
    path: 'all-user',
    component: AllUserComponent,canActivate:[authGuard]
  },
  {
    path: 'view-user/:username',
    component: UserProfileComponent,canActivate:[authGuard]
  },
  {
    path: 'all-subjects',
    component: AllSubjectComponent,canActivate:[authGuard]
  },
  {
    path: 'view-subject/:id',
    component: ViewSubjectComponent,canActivate:[authGuard]
  },
  {
    path:'add-student',component:AddStudentComponent,canActivate:[authGuard]
  },
  {
    path:'all-students',component:AllStudentComponent,canActivate:[authGuard]
   
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
