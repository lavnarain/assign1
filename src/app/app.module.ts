import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MockBackend } from '@angular/http/testing';
import { serverProvider } from './helpers/server';
import { HttpModule, Http, BaseRequestOptions } from '@angular/http';
// import { AuthHttp, AUTH_PROVIDERS, provideAuth, AuthConfig } from 'angular2-jwt';


//components
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LeftSiderbarComponent } from './left-siderbar/left-siderbar.component';

//packages
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//for navigation
import {AboutUscontentModule} from './component/aboutus/aboutus.module';
import {DashboardcontentModule} from './component/dashboard/dashboard.module';

//servies
import {AuthenticationService} from './service/authentication.service';
import { AuthGuard } from './guard/auth.guard';


// export function getAuthHttp(http) {
//   return new AuthHttp(new AuthConfig({
//     tokenName: 'token'
//   }), http);
// }

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    FooterComponent,
    HeaderComponent,
    LeftSiderbarComponent,
  ],
  imports: [
    FormsModule, 
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule,
    AboutUscontentModule,
    DashboardcontentModule,
    HttpClientModule
  ],
  providers: [
    AuthenticationService,
    AuthGuard,
    // AuthHttp,
    // {
    //   provide: AuthHttp,
    //   useFactory: getAuthHttp,
    //   deps: [Http]
    // },

    //mock authentication is here
    serverProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
