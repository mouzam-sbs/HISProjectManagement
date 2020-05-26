import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import { AngularWebStorageModule } from 'angular-web-storage';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error.component';
import { ReadstoriesComponent } from './user/readstories/readstories.component';
import { PoststoryComponent } from './user/poststory/poststory.component';
import { ApprovestoryComponent } from './admin/approvestory/approvestory.component';
import { ApiService } from './services/api.service';
import { AccessdeniedComponent } from './accessdenied/accessdenied.component';
import { SSInterceptorService } from './services/ssinterceptor.service';
import { GoogleComponent } from './google/google.component';
import { HISCustomerUIComponent } from './hiscustomer-ui/hiscustomer-ui.component';
import { HISProductUIComponent } from './hisproduct-ui/hisproduct-ui.component';
import { HISProjectUIComponent } from './hisproject-ui/hisproject-ui.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent,
    ReadstoriesComponent,
    PoststoryComponent,
    ApprovestoryComponent,
    AccessdeniedComponent,
    GoogleComponent,
    HISCustomerUIComponent,
    HISProductUIComponent,
    HISProjectUIComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    RouterModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    OrderModule,
    AngularWebStorageModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    LoadingBarModule,
    ChartsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: SSInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
