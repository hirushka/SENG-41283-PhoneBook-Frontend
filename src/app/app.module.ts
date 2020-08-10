import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';

import { AuthenticationGuard , MsAdalAngular6Module } from 'microsoft-adal-angular6';  
import { infoService } from '../app/service/infoService'
import { HttpClientModule } from '@angular/common/http'
import { GreetingMessage } from '../app/service/azure.devicelog'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LoginpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MsAdalAngular6Module.forRoot({  
      tenant: 'ef9184db-5e2e-4ed5-89ae-2b2feff8b130',  
      clientId: 'cd4eedec-f083-41f9-876d-f842b291293b',  
      redirectUri: 'https://hiru.azureedge.net/#/home',  
      endpoints: {  
        'api': 'cd4eedec-f083-41f9-876d-f842b291293b', // this is for feteching the access token  
      },  
      navigateToLoginRequestUrl: false,  
      cacheLocation: 'localStorage',  
      postLogoutRedirectUri: 'https://hiru.azureedge.net/#/login',  
    }),
  ],
  providers: [AuthenticationGuard,infoService,GreetingMessage],
  bootstrap: [AppComponent]
})
export class AppModule { }
