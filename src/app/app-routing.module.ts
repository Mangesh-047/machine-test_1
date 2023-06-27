import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { AuthGuard } from './shared/services/auth.guard';
import { AuthComponent } from './shared/components/auth/auth.component';
import { HodDashboardComponent } from './shared/components/hod-dashboard/hod-dashboard.component';
import { StaffLeavesCardComponent } from './shared/components/dashboard/staff-leaves-card/staff-leaves-card.component';
import { HodLeaveCardComponent } from './shared/components/hod-dashboard/hod-leave-card/hod-leave-card.component';
import { UserRoleGuard } from './shared/services/user-role.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],

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
    path: 'dashBoard',
    component: HodDashboardComponent,
    canActivate: [AuthGuard, UserRoleGuard]
    // canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
