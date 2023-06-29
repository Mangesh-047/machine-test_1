import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireAuthModule } from '@angular/fire/compat/auth'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { LeaveDialogComponent } from './shared/components/leave-dialog/leave-dialog.component';
import { MaterialModule } from './shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './shared/components/auth/auth.component';
import { HodDashboardComponent } from './shared/components/hod-dashboard/hod-dashboard.component'
import { environment } from 'src/environments/environment';
import { IntercepterService } from './shared/services/intercepter.service';
import { StaffLeavesCardComponent } from './shared/components/dashboard/staff-leaves-card/staff-leaves-card.component';
import { LeaveStatusPipe } from './shared/pipes/leave-status.pipe';
import { HodLeaveCardComponent } from './shared/components/hod-dashboard/hod-leave-card/hod-leave-card.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { ProfileComponent } from './shared/components/profile/profile.component';
import { SnacbarComponent } from './shared/components/snacbar/snacbar.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LeaveDialogComponent,
    NavbarComponent,
    AuthComponent,
    HodDashboardComponent,
    StaffLeavesCardComponent,
    LeaveStatusPipe,
    HodLeaveCardComponent,
    PageNotFoundComponent,
    DropdownDirective,
    ProfileComponent,
    SnacbarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase), // firebase
    AngularFireAuthModule // firebase


  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: IntercepterService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// npm i firebase  on firebase website
// ng add @angular/fire