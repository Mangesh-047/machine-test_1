import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { AuthGuard } from './shared/services/auth.guard';
import { AuthComponent } from './shared/components/auth/auth.component';
import { HodDashboardComponent } from './shared/components/hod-dashboard/hod-dashboard.component';
import { StaffLeavesCardComponent } from './shared/components/dashboard/staff-leaves-card/staff-leaves-card.component';
import { HodLeaveCardComponent } from './shared/components/hod-dashboard/hod-leave-card/hod-leave-card.component';
import { UserRoleGuard } from './shared/services/user-role.guard';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { ProfileComponent } from './shared/components/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
  },

  {
    path: 'staff-dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    // data: {
    //   userRole: 'staff'
    // }
  },

  // {
  //   path: 'staff-leaves',
  //   component: StaffLeavesCardComponent,
  //   canActivate: [AuthGuard,],
  //   data: {
  //     userRole: 'USER'
  //   }
  // },
  // {
  //   path: 'hod-leaves',
  //   component: HodLeaveCardComponent,
  //   canActivate: [AuthGuard],
  //   data: {
  //     userRole: 'ADMIN'
  //   }
  // },

  {
    path: 'hod-dashboard',
    component: HodDashboardComponent,
    canActivate: [AuthGuard, UserRoleGuard],
    data: {
      userRole: 'hod'
    }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'page-not-found', component: PageNotFoundComponent,
    data: {
      errorMsg: 'Opps ....Page Not Found.....!!!! 404 '
    }
  },
  {
    path: '**', redirectTo: 'page-not-found',

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
